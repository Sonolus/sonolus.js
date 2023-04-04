import { EngineDataArchetype } from 'sonolus-core'
import { writeJson } from '../../../utils.js'

export const extractEngineDataArchetypeData = async (
    archetype: EngineDataArchetype,
    dev: string,
): Promise<void> => {
    await writeJson(archetype.data, [
        dev,
        'engine',
        'data',
        'archetypes',
        `${archetype.name}`,
        'data.json',
    ])
}
