import { createPostBuildPlugin } from '../shared/plugin.js'

export const previewPostBuildPlugin = createPostBuildPlugin([
    'EngineConfiguration',
    'EnginePreviewData',
    'LevelData',
])
