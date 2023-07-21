import { Plugin } from 'esbuild'
import { FullSonolusCLIConfig } from '../../config.js'
import { playExtractorPlugin } from './play/index.js'

export const extractorPlugin = (config: FullSonolusCLIConfig): Plugin =>
    playExtractorPlugin(config as never)
