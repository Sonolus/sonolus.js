import { extractLevelData } from './data/index.js'

export const extractLevel = async (dev: string): Promise<void> => {
    await extractLevelData(dev)
}
