import { EngineData } from 'sonolus-core'
import { writeJson } from '../../utils.js'

export const extractEngineDataBuckets = async (data: EngineData, dev: string): Promise<void> => {
    await writeJson(data.buckets, [dev, 'engine', 'data', 'buckets.json'])
}
