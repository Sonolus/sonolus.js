import { EngineConfiguration } from 'sonolus-core'
import { writeJson } from '../../../utils.js'

export const extractEngineConfigurationOptions = async (
    configuration: EngineConfiguration,
    dev: string,
): Promise<void> => {
    await writeJson(configuration.options, [dev, 'engine', 'configuration', 'options.json'])
}
