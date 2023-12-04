import { extractEngineConfiguration } from '../../../shared/extraction/engine/configuration/index.js'
import { extractEngineWatchData } from './watchData/index.js'

export const extractEngine = async (dev: string): Promise<void> => {
    await Promise.all([extractEngineConfiguration(dev), extractEngineWatchData(dev)])
}
