import {
    compressSync,
    EngineConfiguration,
    EngineData,
    EngineDataBucket,
    hash,
    LevelData,
} from 'sonolus-core'
import { Archetype, Entity } from '.'
import { compile, CompileEnvironment } from './compiler'
import { convertData } from './scripting/data'
import { Script } from './scripting/script'

export type BuildInput = {
    engine: {
        configuration: EngineConfiguration
        data: {
            buckets: EngineDataBucket[]
            archetypes: Archetype[]
            scripts: (Script | (() => Script))[]
        }
    }

    level: {
        data: {
            entities: Entity[]
        }
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
            configuration: toResource<EngineConfiguration>(
                buildInput.engine.configuration
            ),

            data: toResource<EngineData>({
                buckets: buildInput.engine.data.buckets,
                archetypes: buildInput.engine.data.archetypes
                    .map((archetype) =>
                        typeof archetype === 'number'
                            ? { script: archetype }
                            : archetype
                    )
                    .map(({ script, data, input }) => ({
                        script,
                        data: data && convertData(data),
                        input,
                    })),
                scripts: buildInput.engine.data.scripts.map((script) => {
                    if (typeof script === 'function') {
                        script = script()
                    }
                    return Object.fromEntries(
                        Object.entries(script)
                            .map(
                                ([key, callback]) =>
                                    [
                                        key,
                                        typeof callback === 'object' &&
                                        'code' in callback
                                            ? callback
                                            : { code: callback },
                                    ] as const
                            )
                            .map(([key, { code, order }]) => [
                                key,
                                {
                                    index: compile(code, compileEnvironment),
                                    order,
                                },
                            ])
                    )
                }),
                nodes: compileEnvironment.nodes,
            }),
        },

        level: {
            data: toResource<LevelData>({
                entities: buildInput.level.data.entities
                    .map((entity) =>
                        typeof entity === 'number'
                            ? { archetype: entity }
                            : entity
                    )
                    .map(({ archetype, data }) => ({
                        archetype,
                        data: data && convertData(data),
                    })),
            }),
        },
    }
}

function toResource<T>(data: T) {
    const buffer = compressSync(data)
    return {
        buffer,
        hash: hash(buffer),
    }
}
