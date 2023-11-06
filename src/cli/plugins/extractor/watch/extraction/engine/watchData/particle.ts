import { EngineWatchData } from 'sonolus-core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEngineWatchDataParticle = async (
    watchData: EngineWatchData,
    dev: string,
): Promise<void> => {
    await writeJson(watchData.particle, [dev, 'engine', 'watchData', 'particle.json'])
}
