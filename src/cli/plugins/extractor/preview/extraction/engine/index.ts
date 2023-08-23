import { extractEngineConfiguration } from '../../../shared/extraction/engine/configuration/index.js'
import { extractEnginePreviewData } from './previewData/index.js'

export const extractEngine = async (dev: string): Promise<void> => {
    await Promise.all([extractEngineConfiguration(dev), extractEnginePreviewData(dev)])
}
