import { Plugin } from 'esbuild'
import { PreviewSonolusCLIConfig } from '../../../config.js'
import { createPlugin, stopwatch } from '../../utils.js'
import { extract } from './extraction/index.js'

export const previewExtractorPlugin = (config: PreviewSonolusCLIConfig): Plugin =>
    createPlugin('Extractor', () => stopwatch('Extraction', () => extract(config.dev)))
