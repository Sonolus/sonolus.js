import { createPostBuildPlugin } from '../shared/plugin.js'

export const watchPostBuildPlugin = createPostBuildPlugin([
    'EngineConfiguration',
    'EngineWatchData',
    'LevelData',
])
