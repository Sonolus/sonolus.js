import * as esbuild from 'esbuild'
import fs from 'fs-extra'
import { loadConfig } from '../config.js'
import { buildOptions } from '../esbuild.js'
import { compilerPlugin } from '../plugins/compiler/index.js'
import { extractorPlugin } from '../plugins/extractor/index.js'
import { postBuildPlugin } from '../plugins/postBuild/index.js'
import { preBuildPlugin } from '../plugins/preBuild/index.js'
import { serve } from './server/index.js'

export const devCLI = async (configPath: string): Promise<void> => {
    const config = await loadConfig('dev', configPath)

    await fs.ensureDir(config.dev)

    await serve(config)

    const context = await esbuild.context(
        await config.esbuild({
            ...buildOptions(config),

            plugins: [
                preBuildPlugin(),
                compilerPlugin(config),
                extractorPlugin(config),
                postBuildPlugin(config),
            ],
        }),
    )

    context.watch()
}
