import {
    CompileTask,
    CompileTaskArtifacts,
    MainTask,
    MainTaskArtifacts,
    TutorialCallback,
} from '@sonolus/sonolus.js-compiler/tutorial'

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
          counts: {
              callback: TutorialCallback
              count: number
          }[]
      }
    | MainTaskArtifacts
    | CompileTaskArtifacts
