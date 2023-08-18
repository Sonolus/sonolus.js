import { createPostBuildPlugin } from '../shared/plugin.js'

export const tutorialPostBuildPlugin = createPostBuildPlugin([
    'EngineConfiguration',
    'EngineTutorialData',
])
