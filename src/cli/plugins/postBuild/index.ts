import { Plugin } from 'esbuild'
import { FullSonolusCLIConfig } from '../../config.js'
import { playPostBuildPlugin } from './play/index.js'
import { tutorialPostBuildPlugin } from './tutorial/index.js'

export const postBuildPlugin = (config: FullSonolusCLIConfig): Plugin => {
    switch (config.type) {
        case 'play':
            return playPostBuildPlugin(config)
        case 'tutorial':
            return tutorialPostBuildPlugin(config)
    }
}
