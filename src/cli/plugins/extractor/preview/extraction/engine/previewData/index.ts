import { EnginePreviewData } from 'sonolus-core'
import { readJsonResource, writeJson } from '../../../../shared/utils.js'
import { extractEnginePreviewDataArchetypes } from './archetypes/index.js'
import { extractEnginePreviewDataNodes } from './nodes.js'
import { extractEnginePreviewDataSkin } from './skin.js'

export const extractEnginePreviewData = async (dev: string): Promise<void> => {
    const previewData = await readJsonResource<EnginePreviewData>([dev, 'EnginePreviewData'])

    await Promise.all([
        writeJson(previewData, [dev, 'engine', 'previewData.json']),
        extractEnginePreviewDataSkin(previewData, dev),
        extractEnginePreviewDataArchetypes(previewData, dev),
        extractEnginePreviewDataNodes(previewData, dev),
    ])
}
