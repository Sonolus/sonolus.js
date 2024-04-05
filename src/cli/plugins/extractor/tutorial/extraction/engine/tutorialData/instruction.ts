import { EngineTutorialData } from '@sonolus/core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEngineTutorialDataInstruction = async (
    tutorialData: EngineTutorialData,
    dev: string,
): Promise<void> => {
    await writeJson(tutorialData.instruction, [dev, 'engine', 'tutorialData', 'instruction.json'])
}
