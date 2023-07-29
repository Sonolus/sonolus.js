import { Plugin } from 'esbuild'
import { Worker } from 'node:worker_threads'
import {
    CompileTask,
    CompileTaskArtifacts,
    MainTask,
    MainTaskArtifacts,
    assemble,
} from 'sonolus.js-compiler/tutorial'
import { TutorialSonolusCLIConfig } from '../../../config.js'
import { getOutfile } from '../../../esbuild.js'
import { createPlugin, stopwatch } from '../../utils.js'
import { WorkerPool, createPool } from '../shared/pool.js'
import { MainToWorkerMessage, WorkerToMainMessage } from './message.js'

const workerUrl = new URL('./worker.js', import.meta.url)
const workerPreloadUrl = new URL('./worker-preload.js', import.meta.url)

export const tutorialCompilerPlugin = (config: TutorialSonolusCLIConfig): Plugin => {
    const workerPool = createPool(config.preloadLib ? workerPreloadUrl : workerUrl)

    return createPlugin('Compiler', () => stopwatch('Compiling', () => compile(config, workerPool)))
}

type ManagedWorker = {
    worker: Worker
    state: 'initializing' | 'idle' | 'busy'
}

const compile = (config: TutorialSonolusCLIConfig, workerPool: WorkerPool) =>
    new Promise<void>((resolve, reject) => {
        const count = Math.max(1, config.workerCount)
        const managedWorkers: ManagedWorker[] = []

        let scanned = false
        let tasks: (MainTask | CompileTask)[] | undefined
        const mainArtifacts: MainTaskArtifacts[] = []
        const compileArtifacts: CompileTaskArtifacts[] = []

        const send = (managedWorker: ManagedWorker, message: MainToWorkerMessage) => {
            managedWorker.state = 'busy'
            managedWorker.worker.postMessage(message)
        }

        const terminate = (error?: unknown) => {
            for (const { worker } of managedWorkers) {
                worker.terminate()
            }

            if (config.mode === 'dev') {
                workerPool.prepare(count)
            }

            if (error) {
                reject(error)
            } else {
                resolve()
            }
        }

        const onUpdate = async () => {
            if (tasks?.length === 0 && managedWorkers.every(({ state }) => state !== 'busy')) {
                if (mainArtifacts.length !== 1) return terminate('Unexpected artifacts state')

                const artifacts = assemble(mainArtifacts[0], compileArtifacts)

                try {
                    await config.export(artifacts)
                } catch (error) {
                    return terminate(error)
                }

                return terminate()
            }

            const managedWorker = managedWorkers.find(({ state }) => state === 'idle')
            if (!managedWorker) return

            if (!scanned) {
                scanned = true

                send(managedWorker, {
                    type: 'scan',
                })
                return
            }

            const task = tasks?.shift()
            if (!task) return

            send(managedWorker, task)
            return
        }

        workerPool.obtain(count).then((workers) => {
            for (const worker of workers) {
                const managedWorker: ManagedWorker = {
                    worker,
                    state: 'initializing',
                }
                managedWorkers.push(managedWorker)

                managedWorker.worker.on('message', (message: WorkerToMainMessage) => {
                    switch (message.type) {
                        case 'ready':
                            if (managedWorker.state !== 'initializing')
                                return terminate('Unexpected worker state')
                            break

                        case 'scan':
                            if (managedWorker.state !== 'busy')
                                return terminate('Unexpected worker state')

                            tasks = [
                                {
                                    type: 'main',
                                },
                                ...message.counts.flatMap(({ callback, count }) =>
                                    [...Array(count).keys()].map(
                                        (index): CompileTask => ({
                                            type: 'compile',
                                            callback,
                                            index,
                                            optimizationLevel: config.optimizationLevel,
                                        }),
                                    ),
                                ),
                            ]
                            break

                        case 'main':
                            if (managedWorker.state !== 'busy')
                                return terminate('Unexpected worker state')

                            mainArtifacts.push(message)
                            break

                        case 'compile':
                            if (managedWorker.state !== 'busy')
                                return terminate('Unexpected worker state')

                            compileArtifacts.push(message)
                            break
                    }

                    managedWorker.state = 'idle'
                    onUpdate()
                })

                managedWorker.worker.on('error', terminate)

                managedWorker.worker.postMessage({
                    type: 'load',
                    entry: getOutfile(config.dev),
                } satisfies MainToWorkerMessage)
            }
        })
    })
