import {
    CompileTask,
    CompileTaskArtifacts,
    MainTask,
    MainTaskArtifacts,
} from 'sonolus.js-compiler/tutorial'

export type MainToWorkerMessage =
    | {
          type: 'load'
          entry: string
      }
    | MainTask
    | CompileTask

export type WorkerToMainMessage =
    | {
          type: 'ready'
      }
    | MainTaskArtifacts
    | CompileTaskArtifacts
