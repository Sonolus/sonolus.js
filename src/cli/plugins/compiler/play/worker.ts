import { Project, buildCompileTask, buildMainTask } from '@sonolus/sonolus.js-compiler/play'
import { getEntryPath, importDefault } from '../../../utils.js'
import { createWorker } from '../shared/worker.js'
import { MainToWorkerMessage, WorkerToMainMessage } from './message.js'

const { send, onReceive } = createWorker<MainToWorkerMessage, WorkerToMainMessage>()

onReceive('load', async ({ entry }) => {
    const project = await importDefault<Project>(getEntryPath(entry))

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
