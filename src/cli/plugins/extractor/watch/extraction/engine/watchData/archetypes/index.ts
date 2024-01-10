import { EngineWatchData, EngineWatchDataArchetype } from 'sonolus-core'
import { empty, writeJson } from '../../../../../shared/utils.js'
import { extractEngineWatchDataArchetypeCallbacks } from './callbacks.js'
import { extractEngineWatchDataArchetypeImports } from './imports.js'

export const extractEngineWatchDataArchetypes = async (
    watchData: EngineWatchData,
    dev: string,
): Promise<void> => {
    await empty([dev, 'engine', 'watchData', 'archetypes'])

    await Promise.all([
        writeJson(watchData.archetypes, [dev, 'engine', 'watchData', 'archetypes.json']),
        ...watchData.archetypes.map((archetype) => extract(archetype, watchData, dev)),
    ])
}

const extract = async (
    archetype: EngineWatchDataArchetype,
    watchData: EngineWatchData,
    dev: string,
) => {
    await Promise.all([
        writeJson(archetype, [dev, 'engine', 'watchData', 'archetypes', `${archetype.name}.json`]),
        extractEngineWatchDataArchetypeImports(archetype, dev),
        extractEngineWatchDataArchetypeCallbacks(archetype, watchData, dev),
    ])
}
