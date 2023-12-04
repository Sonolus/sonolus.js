import { EngineWatchData } from 'sonolus-core'
import { Callback } from 'sonolus.js-compiler/watch'
import { createNodePrinter } from '../../../../shared/printer.js'
import { writeJs } from '../../../../shared/utils.js'

export const extractEngineWatchDataUpdateSpawn = async (
    watchData: EngineWatchData,
    dev: string,
): Promise<void> => {
    const print = createNodePrinter(watchData.nodes)

    const js = [
        `// ${Callback.UpdateSpawn}()`,
        '',
        ...(watchData.updateSpawn === -1 ? [] : print(watchData.updateSpawn)),
        '',
    ].join('\n')

    await writeJs(js, [dev, 'engine', 'watchData', `${Callback.UpdateSpawn}.js`])
}
