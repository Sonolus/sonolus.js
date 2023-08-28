import { BuildOptions } from 'esbuild'
import fs from 'fs-extra'
import path from 'node:path'
import { cpus } from 'os'
import { compress } from 'sonolus-core'
import { Sonolus } from 'sonolus-express'
import { Artifacts as PlayArtifacts } from 'sonolus.js-compiler/play'
import { Artifacts as PreviewArtifacts } from 'sonolus.js-compiler/preview'
import { Artifacts as TutorialArtifacts } from 'sonolus.js-compiler/tutorial'
import { getConfigPath, importDefault } from './utils.js'

type MaybePromise<T> = T | Promise<T>

type BaseSonolusCLIConfig = {
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
}

export type PlaySonolusCLIConfig = BaseSonolusCLIConfig & {
    type: 'play'

    export(this: PlaySonolusCLIConfig, artifacts: PlayArtifacts): MaybePromise<void>
}

export type PreviewSonolusCLIConfig = BaseSonolusCLIConfig & {
    type: 'preview'

    export(this: PreviewSonolusCLIConfig, artifacts: PreviewArtifacts): MaybePromise<void>
}

export type TutorialSonolusCLIConfig = BaseSonolusCLIConfig & {
    type: 'tutorial'

    export(this: TutorialSonolusCLIConfig, artifacts: TutorialArtifacts): MaybePromise<void>
}

export type FullSonolusCLIConfig =
    | PlaySonolusCLIConfig
    | PreviewSonolusCLIConfig
    | TutorialSonolusCLIConfig

export type SonolusCLIConfig =
    | Partial<Omit<PlaySonolusCLIConfig, 'mode'>>
    | Partial<Omit<PreviewSonolusCLIConfig, 'mode'>>
    | Partial<Omit<TutorialSonolusCLIConfig, 'mode'>>

export const loadConfig = async (
    mode: 'dev' | 'build',
    configPath: string,
): Promise<FullSonolusCLIConfig> => {
    const base = {
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
    } satisfies SonolusCLIConfig

    const config: SonolusCLIConfig = await importDefault(getConfigPath(configPath))

    switch (config.type) {
        case 'play':
            return {
                type: 'play',
                entry: './play/src',

                ...base,

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

        case 'preview':
            return {
                type: 'preview',
                entry: './preview/src',

                ...base,

                async export(artifacts) {
                    const output = async (name: string, data: unknown) =>
                        fs.outputFile(
                            path.join(this.mode === 'dev' ? this.dev : this.dist, name),
                            await compress(data),
                        )

                    await Promise.all([
                        output('EngineConfiguration', artifacts.engine.configuration),
                        output('EnginePreviewData', artifacts.engine.previewData),
                        output('LevelData', artifacts.level.data),
                    ])
                },

                ...config,

                mode,
            }

        case 'tutorial':
            return {
                type: 'tutorial',
                entry: './tutorial/src',

                ...base,

                async export(artifacts) {
                    const output = async (name: string, data: unknown) =>
                        fs.outputFile(
                            path.join(this.mode === 'dev' ? this.dev : this.dist, name),
                            await compress(data),
                        )

                    await Promise.all([
                        output('EngineConfiguration', artifacts.engine.configuration),
                        output('EngineTutorialData', artifacts.engine.tutorialData),
                    ])
                },

                ...config,

                mode,
            }

        default:
            throw new Error(`Unexpected config type: ${config.type}`)
    }
}
