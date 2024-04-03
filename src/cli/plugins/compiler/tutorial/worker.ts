import {
    Project,
    TutorialCallback,
    buildCompileTask,
    buildMainTask,
} from '@sonolus/sonolus.js-compiler/tutorial'
import { getEntryPath, importDefault } from '../../../utils.js'
import { createWorker } from '../shared/worker.js'
import { MainToWorkerMessage, WorkerToMainMessage } from './message.js'

const { send, onReceive } = createWorker<MainToWorkerMessage, WorkerToMainMessage>()

onReceive('load', async ({ entry }) => {
    const project = await importDefault<Project>(getEntryPath(entry))

    onReceive('scan', () =>
        send({
            type: 'scan',
            counts: Object.values(TutorialCallback).map((callback) => ({
                callback,
                count: project.engine.tutorialData.tutorial[callback]?.length ?? 0,
            })),
        }),
    )
    onReceive('main', () => send(buildMainTask(project)))
    onReceive('compile', (task) => send(buildCompileTask(project, task)))

    send({
        type: 'ready',
    })
})
