import { EngineWatchDataArchetype } from 'sonolus-core'
import { writeJson } from '../../../../../shared/utils.js'

export const extractEngineWatchDataArchetypeImports = async (
    archetype: EngineWatchDataArchetype,
    dev: string,
): Promise<void> => {
    await writeJson(archetype.imports, [
        dev,
        'engine',
        'watchData',
        'archetypes',
        `${archetype.name}`,
        'imports.json',
    ])
}
