import { EngineWatchData } from 'sonolus-core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEngineWatchDataNodes = async (
    watchData: EngineWatchData,
    dev: string,
): Promise<void> => {
    await writeJson(watchData.nodes, [dev, 'engine', 'watchData', 'nodes.json'])
}
