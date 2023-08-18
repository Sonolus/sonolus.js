import { Plugin } from 'esbuild'
import { PlaySonolusCLIConfig } from '../../../config.js'
import { createPlugin, stopwatch } from '../../utils.js'
import { extract } from './extraction/index.js'

export const playExtractorPlugin = (config: PlaySonolusCLIConfig): Plugin =>
    createPlugin('Extractor', () => stopwatch('Extraction', () => extract(config.dev)))
