import { Code } from '../../scripting/code'

export type SScript = {
    preprocess?: SCallback
    spawnOrder?: SCallback
    shouldSpawn?: SCallback
    initialize?: SCallback
    updateSequential?: SCallback
    touch?: SCallback
    updateParallel?: SCallback
    terminate?: SCallback
}

export type SCallback = {
    code: Code
    order?: number
}
