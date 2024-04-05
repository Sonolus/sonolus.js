import { EngineWatchData } from '@sonolus/core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEngineWatchDataSkin = async (
    watchData: EngineWatchData,
    dev: string,
): Promise<void> => {
    await writeJson(watchData.skin, [dev, 'engine', 'watchData', 'skin.json'])
}
