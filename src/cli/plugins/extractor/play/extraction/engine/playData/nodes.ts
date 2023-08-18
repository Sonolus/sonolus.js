import { EnginePlayData } from 'sonolus-core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEnginePlayDataNodes = async (
    playData: EnginePlayData,
    dev: string,
): Promise<void> => {
    await writeJson(playData.nodes, [dev, 'engine', 'playData', 'nodes.json'])
}
