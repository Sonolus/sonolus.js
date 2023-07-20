import { EnginePlayData } from 'sonolus-core'
import { writeJson } from '../../utils.js'

export const extractEnginePlayDataEffect = async (
    playData: EnginePlayData,
    dev: string,
): Promise<void> => {
    await writeJson(playData.effect, [dev, 'engine', 'playData', 'effect.json'])
}
