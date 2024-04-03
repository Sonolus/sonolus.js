import { EnginePreviewData } from '@sonolus/core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEnginePreviewDataNodes = async (
    previewData: EnginePreviewData,
    dev: string,
): Promise<void> => {
    await writeJson(previewData.nodes, [dev, 'engine', 'previewData', 'nodes.json'])
}
