import { EnginePlayData } from 'sonolus-core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEnginePlayDataSkin = async (
    playData: EnginePlayData,
    dev: string,
): Promise<void> => {
    await writeJson(playData.skin, [dev, 'engine', 'playData', 'skin.json'])
}
