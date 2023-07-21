import { EnginePlayDataArchetype } from 'sonolus-core'
import { writeJson } from '../../../../../shared/utils.js'

export const extractEnginePlayDataArchetypeData = async (
    archetype: EnginePlayDataArchetype,
    dev: string,
): Promise<void> => {
    await writeJson(archetype.data, [
        dev,
        'engine',
        'playData',
        'archetypes',
        `${archetype.name}`,
        'data.json',
    ])
}
