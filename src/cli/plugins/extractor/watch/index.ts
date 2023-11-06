import { Plugin } from 'esbuild'
import { WatchSonolusCLIConfig } from '../../../config.js'
import { createPlugin, stopwatch } from '../../utils.js'
import { extract } from './extraction/index.js'

export const watchExtractorPlugin = (config: WatchSonolusCLIConfig): Plugin =>
    createPlugin('Extractor', () => stopwatch('Extraction', () => extract(config.dev)))
