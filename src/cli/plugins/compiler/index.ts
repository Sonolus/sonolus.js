import { Plugin } from 'esbuild'
import { FullSonolusCLIConfig } from '../../config.js'
import { playCompilerPlugin } from './play/index.js'

export const compilerPlugin = (config: FullSonolusCLIConfig): Plugin => {
    return playCompilerPlugin(config as never)
}
