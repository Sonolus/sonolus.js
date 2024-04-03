import { EngineTutorialData } from '@sonolus/core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEngineTutorialDataParticle = async (
    tutorialData: EngineTutorialData,
    dev: string,
): Promise<void> => {
    await writeJson(tutorialData.particle, [dev, 'engine', 'tutorialData', 'particle.json'])
}
