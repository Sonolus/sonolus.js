import { EnginePlayData } from 'sonolus-core'
import { writeJson } from '../../utils.js'

export const extractEnginePlayDataParticle = async (
    playData: EnginePlayData,
    dev: string,
): Promise<void> => {
    await writeJson(playData.particle, [dev, 'engine', 'playData', 'particle.json'])
}
