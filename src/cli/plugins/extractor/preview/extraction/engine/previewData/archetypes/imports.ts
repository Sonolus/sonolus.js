import { EnginePreviewDataArchetype } from 'sonolus-core'
import { writeJson } from '../../../../../shared/utils.js'

export const extractEnginePreviewDataArchetypeImports = async (
    archetype: EnginePreviewDataArchetype,
    dev: string,
): Promise<void> => {
    await writeJson(archetype.imports, [
        dev,
        'engine',
        'previewData',
        'archetypes',
        `${archetype.name}`,
        'imports.json',
    ])
}
