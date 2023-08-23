import { EnginePreviewData, EnginePreviewDataArchetype } from 'sonolus-core'
import { empty, writeJson } from '../../../../../shared/utils.js'
import { extractEnginePreviewDataArchetypeCallbacks } from './callbacks.js'
import { extractEnginePreviewDataArchetypeData } from './data.js'

export const extractEnginePreviewDataArchetypes = async (
    previewData: EnginePreviewData,
    dev: string,
): Promise<void> => {
    await empty([dev, 'engine', 'previewData', 'archetypes'])

    await Promise.all([
        writeJson(previewData.archetypes, [dev, 'engine', 'previewData', 'archetypes.json']),
        ...previewData.archetypes.map((archetype) => extract(archetype, previewData, dev)),
    ])
}

const extract = async (
    archetype: EnginePreviewDataArchetype,
    previewData: EnginePreviewData,
    dev: string,
) => {
    await Promise.all([
        writeJson(archetype, [
            dev,
            'engine',
            'previewData',
            'archetypes',
            `${archetype.name}.json`,
        ]),
        extractEnginePreviewDataArchetypeData(archetype, dev),
        extractEnginePreviewDataArchetypeCallbacks(archetype, previewData, dev),
    ])
}
