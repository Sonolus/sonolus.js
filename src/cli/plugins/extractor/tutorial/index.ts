import { Plugin } from 'esbuild'
import { TutorialSonolusCLIConfig } from '../../../config.js'
import { createPlugin, stopwatch } from '../../utils.js'
import { extract } from './extraction/index.js'

export const tutorialExtractorPlugin = (config: TutorialSonolusCLIConfig): Plugin =>
    createPlugin('Extractor', () => stopwatch('Extraction', () => extract(config.dev)))
