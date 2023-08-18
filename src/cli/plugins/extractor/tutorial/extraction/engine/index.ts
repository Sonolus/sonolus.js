import { extractEngineConfiguration } from '../../../shared/extraction/engine/configuration/index.js'
import { extractEngineTutorialData } from './tutorialData/index.js'

export const extractEngine = async (dev: string): Promise<void> => {
    await Promise.all([extractEngineConfiguration(dev), extractEngineTutorialData(dev)])
}
