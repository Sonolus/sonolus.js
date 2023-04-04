import { EngineData } from 'sonolus-core'
import { writeJson } from '../../utils.js'

export const extractEngineDataEffect = async (data: EngineData, dev: string): Promise<void> => {
    await writeJson(data.effect, [dev, 'engine', 'data', 'effect.json'])
}
