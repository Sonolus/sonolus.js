import { EngineTutorialData } from 'sonolus-core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEngineTutorialDataNodes = async (
    tutorialData: EngineTutorialData,
    dev: string,
): Promise<void> => {
    await writeJson(tutorialData.nodes, [dev, 'engine', 'tutorialData', 'nodes.json'])
}
