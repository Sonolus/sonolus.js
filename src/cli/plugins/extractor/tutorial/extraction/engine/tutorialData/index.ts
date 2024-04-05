import { EngineTutorialData } from '@sonolus/core'
import { readJsonResource, writeJson } from '../../../../shared/utils.js'
import { extractEngineTutorialDataCallbacks } from './callbacks.js'
import { extractEngineTutorialDataEffect } from './effect.js'
import { extractEngineTutorialDataInstruction } from './instruction.js'
import { extractEngineTutorialDataNodes } from './nodes.js'
import { extractEngineTutorialDataParticle } from './particle.js'
import { extractEngineTutorialDataSkin } from './skin.js'

export const extractEngineTutorialData = async (dev: string): Promise<void> => {
    const tutorialData = await readJsonResource<EngineTutorialData>([dev, 'EngineTutorialData'])

    await Promise.all([
        writeJson(tutorialData, [dev, 'engine', 'tutorialData.json']),
        extractEngineTutorialDataSkin(tutorialData, dev),
        extractEngineTutorialDataEffect(tutorialData, dev),
        extractEngineTutorialDataParticle(tutorialData, dev),
        extractEngineTutorialDataInstruction(tutorialData, dev),
        extractEngineTutorialDataCallbacks(tutorialData, dev),
        extractEngineTutorialDataNodes(tutorialData, dev),
    ])
}
