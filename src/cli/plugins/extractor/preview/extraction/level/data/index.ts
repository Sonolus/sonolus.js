import { LevelData } from '@sonolus/core'
import { readJsonResource, writeJson } from '../../../../shared/utils.js'

export const extractLevelData = async (dev: string): Promise<void> => {
    const data = await readJsonResource<LevelData>([dev, 'LevelData'])

    await writeJson(data, [dev, 'level', 'data.json'])
}
