import { EnginePlayData, EnginePlayDataArchetype } from '@sonolus/core'
import { empty, writeJson } from '../../../../../shared/utils.js'
import { extractEnginePlayDataArchetypeCallbacks } from './callbacks.js'
import { extractEnginePlayDataArchetypeExports } from './exports.js'
import { extractEnginePlayDataArchetypeImports } from './imports.js'

export const extractEnginePlayDataArchetypes = async (
    playData: EnginePlayData,
    dev: string,
): Promise<void> => {
    await empty([dev, 'engine', 'playData', 'archetypes'])

    await Promise.all([
        writeJson(playData.archetypes, [dev, 'engine', 'playData', 'archetypes.json']),
        ...playData.archetypes.map((archetype) => extract(archetype, playData, dev)),
    ])
}

const extract = async (
    archetype: EnginePlayDataArchetype,
    playData: EnginePlayData,
    dev: string,
) => {
    await Promise.all([
        writeJson(archetype, [dev, 'engine', 'playData', 'archetypes', `${archetype.name}.json`]),
        extractEnginePlayDataArchetypeImports(archetype, dev),
        extractEnginePlayDataArchetypeExports(archetype, dev),
        extractEnginePlayDataArchetypeCallbacks(archetype, playData, dev),
    ])
}
