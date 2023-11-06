import { Plugin } from 'esbuild'
import { FullSonolusCLIConfig } from '../../config.js'
import { playCompilerPlugin } from './play/index.js'
import { previewCompilerPlugin } from './preview/index.js'
import { tutorialCompilerPlugin } from './tutorial/index.js'
import { watchCompilerPlugin } from './watch/index.js'

export const compilerPlugin = (config: FullSonolusCLIConfig): Plugin => {
    switch (config.type) {
        case 'play':
            return playCompilerPlugin(config)
        case 'watch':
            return watchCompilerPlugin(config)
        case 'preview':
            return previewCompilerPlugin(config)
        case 'tutorial':
            return tutorialCompilerPlugin(config)
    }
}
