import { EngineTutorialData } from 'sonolus-core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEngineTutorialDataSkin = async (
    tutorialData: EngineTutorialData,
    dev: string,
): Promise<void> => {
    await writeJson(tutorialData.skin, [dev, 'engine', 'tutorialData', 'skin.json'])
}
