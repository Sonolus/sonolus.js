import { EnginePlayDataArchetype } from 'sonolus-core'
import { writeJson } from '../../../../../shared/utils.js'

export const extractEnginePlayDataArchetypeExports = async (
    archetype: EnginePlayDataArchetype,
    dev: string,
): Promise<void> => {
    await writeJson(archetype.exports, [
        dev,
        'engine',
        'playData',
        'archetypes',
        `${archetype.name}`,
        'exports.json',
    ])
}
