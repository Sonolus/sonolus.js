import { EngineData } from 'sonolus-core'
import { writeJson } from '../../utils.js'

export const extractEngineDataSkin = async (data: EngineData, dev: string): Promise<void> => {
    await writeJson(data.skin, [dev, 'engine', 'data', 'skin.json'])
}
