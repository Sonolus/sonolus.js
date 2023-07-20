import { EnginePlayData } from 'sonolus-core'
import { readJsonResource, writeJson } from '../../utils.js'
import { extractEnginePlayDataArchetypes } from './archetypes/index.js'
import { extractEnginePlayDataBuckets } from './buckets.js'
import { extractEnginePlayDataEffect } from './effect.js'
import { extractEnginePlayDataNodes } from './nodes.js'
import { extractEnginePlayDataParticle } from './particle.js'
import { extractEnginePlayDataSkin } from './skin.js'

export const extractEnginePlayData = async (dev: string): Promise<void> => {
    const playData = await readJsonResource<EnginePlayData>([dev, 'EnginePlayData'])

    await Promise.all([
        writeJson(playData, [dev, 'engine', 'playData.json']),
        extractEnginePlayDataSkin(playData, dev),
        extractEnginePlayDataEffect(playData, dev),
        extractEnginePlayDataParticle(playData, dev),
        extractEnginePlayDataBuckets(playData, dev),
        extractEnginePlayDataArchetypes(playData, dev),
        extractEnginePlayDataNodes(playData, dev),
    ])
}
