import { BuildOptions } from 'esbuild'
import path from 'node:path'
import { FullSonolusCLIConfig } from './config.js'

export const buildOptions = (config: FullSonolusCLIConfig): BuildOptions => ({
    entryPoints: [config.entry],

    bundle: true,
    platform: 'node',
    format: 'esm',
    packages: 'external',

    outfile: getOutfile(config.dev),

    logOverride: {
        'direct-eval': 'silent',
    },
})

export const getOutfile = (dev: string): string => path.join(dev, 'index.js')
