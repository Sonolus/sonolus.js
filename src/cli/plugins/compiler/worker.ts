import { parentPort } from 'node:worker_threads'
import { Project, buildCompileTask, buildMainTask } from 'sonolus.js-compiler/play'
import { importDefault } from '../../utils.js'
import { MainToWorkerMessage, WorkerToMainMessage } from './message.js'

if (!parentPort) throw 'Unexpected missing parentPort'
const mainPort = parentPort

const send = (message: WorkerToMainMessage) => mainPort.postMessage(message)
const onReceive = <T extends MainToWorkerMessage['type']>(
    type: T,
    handler: (message: Extract<MainToWorkerMessage, { type: T }>) => void,
) =>
    mainPort.on('message', (message: WorkerToMainMessage) => {
        if (message.type !== type) return

        handler(message as never)
    })

onReceive('load', async ({ entry }) => {
    const project = await importDefault<Project>(entry)

    onReceive('scan', () =>
        send({
            type: 'scan',
            archetypes: Object.keys(project.engine.playData.archetypes),
        }),
    )
    onReceive('main', () => send(buildMainTask(project)))
    onReceive('compile', (task) => send(buildCompileTask(project, task)))

    send({
        type: 'ready',
    })
})
