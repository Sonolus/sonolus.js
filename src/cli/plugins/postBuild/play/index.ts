import { createPostBuildPlugin } from '../shared/plugin.js'

export const playPostBuildPlugin = createPostBuildPlugin([
    'EngineConfiguration',
    'EnginePlayData',
    'LevelData',
])
