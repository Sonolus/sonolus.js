import { Plugin } from 'esbuild'
import { FullSonolusCLIConfig } from '../../config.js'
import { createPlugin, stopwatch } from '../utils.js'
import { extract } from './extraction/index.js'

export const extractorPlugin = (config: FullSonolusCLIConfig): Plugin =>
    createPlugin('Extractor', () => stopwatch('Extraction', () => extract(config.dev)))
