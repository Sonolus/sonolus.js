import { extractEngineConfiguration } from './configuration/index.js'
import { extractEngineData } from './data/index.js'

export const extractEngine = async (dev: string): Promise<void> => {
    await Promise.all([extractEngineConfiguration(dev), extractEngineData(dev)])
}
