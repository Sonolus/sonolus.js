import { extractEngineConfiguration } from './configuration/index.js'
import { extractEnginePlayData } from './playData/index.js'

export const extractEngine = async (dev: string): Promise<void> => {
    await Promise.all([extractEngineConfiguration(dev), extractEnginePlayData(dev)])
}
