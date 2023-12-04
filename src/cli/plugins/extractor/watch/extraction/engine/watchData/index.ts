import { EngineWatchData } from 'sonolus-core'
import { readJsonResource, writeJson } from '../../../../shared/utils.js'
import { extractEngineWatchDataArchetypes } from './archetypes/index.js'
import { extractEngineWatchDataEffect } from './effect.js'
import { extractEngineWatchDataNodes } from './nodes.js'
import { extractEngineWatchDataParticle } from './particle.js'
import { extractEngineWatchDataSkin } from './skin.js'
import { extractEngineWatchDataUpdateSpawn } from './updateSpawn.js'

export const extractEngineWatchData = async (dev: string): Promise<void> => {
    const watchData = await readJsonResource<EngineWatchData>([dev, 'EngineWatchData'])

    await Promise.all([
        writeJson(watchData, [dev, 'engine', 'watchData.json']),
        extractEngineWatchDataSkin(watchData, dev),
        extractEngineWatchDataEffect(watchData, dev),
        extractEngineWatchDataParticle(watchData, dev),
        extractEngineWatchDataArchetypes(watchData, dev),
        extractEngineWatchDataUpdateSpawn(watchData, dev),
        extractEngineWatchDataNodes(watchData, dev),
    ])
}
