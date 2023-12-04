import { Plugin } from 'esbuild'
import { FullSonolusCLIConfig } from '../../config.js'
import { playPostBuildPlugin } from './play/index.js'
import { previewPostBuildPlugin } from './preview/index.js'
import { tutorialPostBuildPlugin } from './tutorial/index.js'
import { watchPostBuildPlugin } from './watch/index.js'

export const postBuildPlugin = (config: FullSonolusCLIConfig): Plugin => {
    switch (config.type) {
        case 'play':
            return playPostBuildPlugin(config)
        case 'watch':
            return watchPostBuildPlugin(config)
        case 'preview':
            return previewPostBuildPlugin(config)
        case 'tutorial':
            return tutorialPostBuildPlugin(config)
    }
}
