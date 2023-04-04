import { EngineData } from 'sonolus-core'
import { writeJson } from '../../utils.js'

export const extractEngineDataParticle = async (data: EngineData, dev: string): Promise<void> => {
    await writeJson(data.particle, [dev, 'engine', 'data', 'particle.json'])
}
