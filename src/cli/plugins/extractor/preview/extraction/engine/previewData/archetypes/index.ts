import { EnginePreviewData, EnginePreviewDataArchetype } from '@sonolus/core'
import { empty, writeJson } from '../../../../../shared/utils.js'
import { extractEnginePreviewDataArchetypeCallbacks } from './callbacks.js'
import { extractEnginePreviewDataArchetypeImports } from './imports.js'

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
        extractEnginePreviewDataArchetypeImports(archetype, dev),
        extractEnginePreviewDataArchetypeCallbacks(archetype, previewData, dev),
    ])
}
