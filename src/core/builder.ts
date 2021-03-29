import * as crypto from 'crypto'
import { gzipSync } from 'zlib'

import { compile } from './compiler'
import { convert } from './scripting/dataType'
import { SData } from './sonolus/data'
import { SEngineConfiguration } from './sonolus/engine/configuration'
import { SEngineData } from './sonolus/engine/data'
import { SCallback } from './sonolus/engine/script'
import { SLevelData } from './sonolus/level/data'
import { SNode } from './sonolus/node'

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
    const nodes: SNode[] = []
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
                                    index: compile(callback, nodes),
                                    ...(order == undefined ? {} : { order }),
                                },
                            ]
                        )
                    )
                }),
                nodes,
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

function convertData(
    data: SData
): {
    index: number
    values: number[]
} {
    return {
        index: data.index,
        values: data.values.map(convert),
    }
}

function compress(data: any): Resource {
    const buffer = gzipSync(JSON.stringify(data), { level: 9 })
    const hash = crypto.createHash('sha1').update(buffer).digest('hex')
    return {
        buffer,
        hash,
    }
}
