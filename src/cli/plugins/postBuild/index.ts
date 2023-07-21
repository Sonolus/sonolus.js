import { Plugin } from 'esbuild'
import { FullSonolusCLIConfig } from '../../config.js'
import { playPostBuildPlugin } from './play/index.js'

export const postBuildPlugin = (config: FullSonolusCLIConfig): Plugin => playPostBuildPlugin(config)
