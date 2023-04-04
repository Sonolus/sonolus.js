import * as esbuild from 'esbuild'
import fs from 'fs-extra'
import { loadConfig } from '../config.js'
import { buildOptions } from '../esbuild.js'
import { compilerPlugin } from '../plugins/compiler/index.js'
import { preBuildPlugin } from '../plugins/preBuild/index.js'

export const buildCLI = async (): Promise<void> => {
    const config = await loadConfig('build')

    await fs.ensureDir(config.dev)
    await fs.ensureDir(config.dist)

    await esbuild.build(
        await config.esbuild({
            ...buildOptions(config),

            plugins: [preBuildPlugin(), compilerPlugin(config)],
        }),
    )
}
