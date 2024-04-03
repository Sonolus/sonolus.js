import { EngineWatchData } from '@sonolus/core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEngineWatchDataEffect = async (
    watchData: EngineWatchData,
    dev: string,
): Promise<void> => {
    await writeJson(watchData.effect, [dev, 'engine', 'watchData', 'effect.json'])
}
