import { BuildOptions } from 'esbuild'
import fs from 'fs-extra'
import path from 'node:path'
import { cpus } from 'os'
import { compress } from 'sonolus-core'
import { Sonolus } from 'sonolus-express'
import { Artifacts } from 'sonolus.js-compiler/play'
import { importDefault } from './utils.js'

type MaybePromise<T> = T | Promise<T>

export type FullSonolusCLIConfig = {
    mode: 'dev' | 'build'

    entry: string
    dev: string
    dist: string
    port: number
    host: string
    workerCount: number
    preloadLib: boolean
    optimizationLevel: 'low' | 'high'

    esbuild(this: FullSonolusCLIConfig, options: BuildOptions): MaybePromise<BuildOptions>
    devServer(this: FullSonolusCLIConfig, sonolus: Sonolus): MaybePromise<void>
    export(this: FullSonolusCLIConfig, artifacts: Artifacts): MaybePromise<void>
}

export type SonolusCLIConfig = Partial<Omit<FullSonolusCLIConfig, 'mode'>>

export const loadConfig = async (
    mode: 'dev' | 'build',
    configPath: string,
): Promise<FullSonolusCLIConfig> => {
    const config: SonolusCLIConfig = await importDefault(configPath)

    return {
        entry: './src/index.ts',
        dev: './.dev',
        dist: './dist',
        port: 8080,
        host: '0.0.0.0',
        workerCount: Math.floor(cpus().length / 2),
        preloadLib: mode === 'dev',
        optimizationLevel: mode === 'dev' ? 'low' : 'high',

        esbuild(options) {
            return options
        },

        devServer() {
            // noop
        },

        async export(artifacts) {
            const output = async (name: string, data: unknown) =>
                fs.outputFile(
                    path.join(this.mode === 'dev' ? this.dev : this.dist, name),
                    await compress(data),
                )

            await Promise.all([
                output('EngineConfiguration', artifacts.engine.configuration),
                output('EnginePlayData', artifacts.engine.playData),
                output('LevelData', artifacts.level.data),
            ])
        },

        ...config,

        mode,
    }
}
