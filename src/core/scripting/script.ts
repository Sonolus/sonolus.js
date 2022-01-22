import { Code } from '.'

export type Script = {
    preprocess?: Callback
    spawnOrder?: Callback
    shouldSpawn?: Callback
    initialize?: Callback
    updateSequential?: Callback
    touch?: Callback
    updateParallel?: Callback
    terminate?: Callback
}

export type Callback =
    | Code
    | {
          code: Code
          order?: number
      }
