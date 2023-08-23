import { Plugin } from 'esbuild'
import { FullSonolusCLIConfig } from '../../config.js'
import { playExtractorPlugin } from './play/index.js'
import { previewExtractorPlugin } from './preview/index.js'
import { tutorialExtractorPlugin } from './tutorial/index.js'

export const extractorPlugin = (config: FullSonolusCLIConfig): Plugin => {
    switch (config.type) {
        case 'play':
            return playExtractorPlugin(config)
        case 'preview':
            return previewExtractorPlugin(config)
        case 'tutorial':
            return tutorialExtractorPlugin(config)
    }
}
