import { EngineData } from 'sonolus-core'
import { writeJson } from '../../utils.js'

export const extractEngineDataNodes = async (data: EngineData, dev: string): Promise<void> => {
    await writeJson(data.nodes, [dev, 'engine', 'data', 'nodes.json'])
}
