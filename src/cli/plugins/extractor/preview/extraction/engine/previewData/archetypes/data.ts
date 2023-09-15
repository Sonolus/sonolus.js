import { EnginePreviewDataArchetype } from 'sonolus-core'
import { writeJson } from '../../../../../shared/utils.js'

export const extractEnginePreviewDataArchetypeData = async (
    archetype: EnginePreviewDataArchetype,
    dev: string,
): Promise<void> => {
    await writeJson(archetype.data, [
        dev,
        'engine',
        'previewData',
        'archetypes',
        `${archetype.name}`,
        'data.json',
    ])
}
