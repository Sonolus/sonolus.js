import {
    CompileTask,
    CompileTaskArtifacts,
    MainTask,
    MainTaskArtifacts,
} from 'sonolus.js-compiler/preview'

export type MainToWorkerMessage =
    | {
          type: 'load'
          entry: string
      }
    | {
          type: 'scan'
      }
    | MainTask
    | CompileTask

export type WorkerToMainMessage =
    | {
          type: 'ready'
      }
    | {
          type: 'scan'
          archetypes: string[]
      }
    | MainTaskArtifacts
    | CompileTaskArtifacts
