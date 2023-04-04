import { EngineData, EngineDataArchetype } from 'sonolus-core'
import { empty, writeJson } from '../../../utils.js'
import { extractEngineDataArchetypeCallbacks } from './callbacks.js'
import { extractEngineDataArchetypeData } from './data.js'

export const extractEngineDataArchetypes = async (data: EngineData, dev: string): Promise<void> => {
    await empty([dev, 'engine', 'data', 'archetypes'])

    await Promise.all([
        writeJson(data.archetypes, [dev, 'engine', 'data', 'archetypes.json']),
        ...data.archetypes.map((archetype) => extract(archetype, data, dev)),
    ])
}

const extract = async (archetype: EngineDataArchetype, data: EngineData, dev: string) => {
    await Promise.all([
        writeJson(archetype, [dev, 'engine', 'data', 'archetypes', `${archetype.name}.json`]),
        extractEngineDataArchetypeData(archetype, dev),
        extractEngineDataArchetypeCallbacks(archetype, data, dev),
    ])
}
