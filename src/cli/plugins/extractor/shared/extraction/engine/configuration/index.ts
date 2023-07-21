import { EngineConfiguration } from 'sonolus-core'
import { readJsonResource, writeJson } from '../../../utils.js'
import { extractEngineConfigurationOptions } from './options.js'
import { extractEngineConfigurationUI } from './ui.js'

export const extractEngineConfiguration = async (dev: string): Promise<void> => {
    const configuration = await readJsonResource<EngineConfiguration>([dev, 'EngineConfiguration'])

    await Promise.all([
        writeJson(configuration, [dev, 'engine', 'configuration.json']),
        extractEngineConfigurationOptions(configuration, dev),
        extractEngineConfigurationUI(configuration, dev),
    ])
}
