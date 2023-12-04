import { Plugin } from 'esbuild'
import { FullSonolusCLIConfig } from '../../config.js'
import { playExtractorPlugin } from './play/index.js'
import { previewExtractorPlugin } from './preview/index.js'
import { tutorialExtractorPlugin } from './tutorial/index.js'
import { watchExtractorPlugin } from './watch/index.js'

export const extractorPlugin = (config: FullSonolusCLIConfig): Plugin => {
    switch (config.type) {
        case 'play':
            return playExtractorPlugin(config)
        case 'watch':
            return watchExtractorPlugin(config)
        case 'preview':
            return previewExtractorPlugin(config)
        case 'tutorial':
            return tutorialExtractorPlugin(config)
    }
}
