import path from 'node:path'

import { BuildOptions } from 'esbuild'

import { FullSonolusCLIConfig } from './config.js'
import { getEntryPath } from './utils.js'

export const buildOptions = (config: FullSonolusCLIConfig): BuildOptions => ({
    entryPoints: [getEntryPath(config.entry)],

    bundle: true,
    platform: 'node',
    format: 'esm',
    packages: 'external',

    outfile: getOutfile(config.dev),

    logOverride: {
        'direct-eval': 'silent',
    },
})

export const getOutfile = (dev: string): string => path.join(dev, 'index.mjs')
