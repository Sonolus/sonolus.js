import { EngineConfiguration } from 'sonolus-core'
import { writeJson } from '../../../utils.js'

export const extractEngineConfigurationUI = async (
    configuration: EngineConfiguration,
    dev: string,
): Promise<void> => {
    await writeJson(configuration.ui, [dev, 'engine', 'configuration', 'ui.json'])
}
