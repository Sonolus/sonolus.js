import { EngineTutorialData } from 'sonolus-core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEngineTutorialDataEffect = async (
    tutorialData: EngineTutorialData,
    dev: string,
): Promise<void> => {
    await writeJson(tutorialData.effect, [dev, 'engine', 'tutorialData', 'effect.json'])
}
