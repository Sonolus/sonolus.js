import { EnginePlayDataArchetype } from 'sonolus-core'
import { writeJson } from '../../../../../shared/utils.js'

export const extractEnginePlayDataArchetypeImports = async (
    archetype: EnginePlayDataArchetype,
    dev: string,
): Promise<void> => {
    await writeJson(archetype.imports, [
        dev,
        'engine',
        'playData',
        'archetypes',
        `${archetype.name}`,
        'imports.json',
    ])
}
