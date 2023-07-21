import { Plugin } from 'esbuild'
import { FullSonolusCLIConfig } from '../../config.js'
import { playCompilerPlugin } from './play/index.js'
import { tutorialCompilerPlugin } from './tutorial/index.js'

export const compilerPlugin = (config: FullSonolusCLIConfig): Plugin => {
    switch (config.type) {
        case 'play':
            return playCompilerPlugin(config)
        case 'tutorial':
            return tutorialCompilerPlugin(config)
    }
}
