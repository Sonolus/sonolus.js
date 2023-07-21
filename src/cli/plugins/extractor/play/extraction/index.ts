import { extractEngine } from './engine/index.js'
import { extractLevel } from './level/index.js'

export const extract = async (dev: string): Promise<void> => {
    await Promise.all([extractEngine(dev), extractLevel(dev)])
}
