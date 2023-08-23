import { EnginePreviewData } from 'sonolus-core'
import { writeJson } from '../../../../shared/utils.js'

export const extractEnginePreviewDataSkin = async (
    previewData: EnginePreviewData,
    dev: string,
): Promise<void> => {
    await writeJson(previewData.skin, [dev, 'engine', 'previewData', 'skin.json'])
}
