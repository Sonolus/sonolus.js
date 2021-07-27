import { gzipSync } from 'zlib'
import { compile, CompileEnvironment } from './compiler'
import { hash } from './hasher'
import { convert } from './scripting/dataType'
import { SData } from './sonolus/data'
import { SEngineConfiguration } from './sonolus/engine/configuration'
import { SEngineData } from './sonolus/engine/data'
import { SCallback } from './sonolus/engine/script'
import { SLevelData } from './sonolus/level/data'

export type BuildInput = {
    engine: {
        configuration: SEngineConfiguration
        data: SEngineData
    }

    level: {
        data: SLevelData
    }
}

export type BuildOutput = {
    engine: {
        configuration: Resource
        data: Resource
    }
    level: {
        data: Resource
    }
}

export type Resource = {
    buffer: Buffer
    hash: string
}

export function build(buildInput: BuildInput): BuildOutput {
    const compileEnvironment: CompileEnvironment = {
        nodes: [],
    }
    return {
        engine: {
            configuration: compress(buildInput.engine.configuration),

            data: compress({
                buckets: buildInput.engine.data.buckets,
                archetypes: buildInput.engine.data.archetypes.map(
                    ({ script, data, input }) => ({
                        script,
                        ...(data == undefined
                            ? {}
                            : { data: convertData(data) }),
                        ...(input == undefined ? {} : { input }),
                    })
                ),
                scripts: buildInput.engine.data.scripts.map((script) => {
                    if (typeof script === 'function') {
                        script = script()
                    }
                    return Object.fromEntries(
                        (Object.entries(script) as [string, SCallback][]).map(
                            ([key, { code: callback, order }]) => [
                                key,
                                {
                                    index: compile(
                                        callback,
                                        compileEnvironment
                                    ),
                                    ...(order == undefined ? {} : { order }),
                                },
                            ]
                        )
                    )
                }),
                nodes: compileEnvironment.nodes,
            }),
        },

        level: {
            data: compress({
                entities: buildInput.level.data.entities.map(
                    ({ archetype, data }) => ({
                        archetype,
                        ...(data == undefined
                            ? {}
                            : { data: convertData(data) }),
                    })
                ),
            }),
        },
    }
}

function convertData(data: SData): {
    index: number
    values: number[]
} {
    return {
        index: data.index,
        values: data.values.map(convert),
    }
}

function compress(data: unknown): Resource {
    const buffer = gzipSync(JSON.stringify(data), { level: 9 })
    return {
        buffer,
        hash: hash(buffer),
    }
}
