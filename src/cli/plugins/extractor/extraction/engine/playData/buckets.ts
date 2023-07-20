import { EnginePlayData } from 'sonolus-core'
import { writeJson } from '../../utils.js'

export const extractEnginePlayDataBuckets = async (
    playData: EnginePlayData,
    dev: string,
): Promise<void> => {
    await writeJson(playData.buckets, [dev, 'engine', 'playData', 'buckets.json'])
}
