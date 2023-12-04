import { EngineWatchDataArchetype } from 'sonolus-core'
import { writeJson } from '../../../../../shared/utils.js'

export const extractEngineWatchDataArchetypeData = async (
    archetype: EngineWatchDataArchetype,
    dev: string,
): Promise<void> => {
    await writeJson(archetype.data, [
        dev,
        'engine',
        'watchData',
        'archetypes',
        `${archetype.name}`,
        'data.json',
    ])
}
