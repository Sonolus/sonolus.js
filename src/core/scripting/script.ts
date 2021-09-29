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

export type Callback = {
    code: Code
    order?: number
}
