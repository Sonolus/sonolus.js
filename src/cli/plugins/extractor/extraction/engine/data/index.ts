import { EngineData } from 'sonolus-core'
import { readJsonResource, writeJson } from '../../utils.js'
import { extractEngineDataArchetypes } from './archetypes/index.js'
import { extractEngineDataBuckets } from './buckets.js'
import { extractEngineDataEffect } from './effect.js'
import { extractEngineDataNodes } from './nodes.js'
import { extractEngineDataParticle } from './particle.js'
import { extractEngineDataSkin } from './skin.js'

export const extractEngineData = async (dev: string): Promise<void> => {
    const data = await readJsonResource<EngineData>([dev, 'EngineData'])

    await Promise.all([
        writeJson(data, [dev, 'engine', 'data.json']),
        extractEngineDataSkin(data, dev),
        extractEngineDataEffect(data, dev),
        extractEngineDataParticle(data, dev),
        extractEngineDataBuckets(data, dev),
        extractEngineDataArchetypes(data, dev),
        extractEngineDataNodes(data, dev),
    ])
}
