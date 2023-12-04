import {
    EngineWatchData,
    EngineWatchDataArchetype,
    EngineWatchDataArchetypeCallback,
} from 'sonolus-core'
import { Callback } from 'sonolus.js-compiler/watch'
import { createNodePrinter } from '../../../../../shared/printer.js'
import { writeJs } from '../../../../../shared/utils.js'

type ArchetypeCallback = Exclude<Callback, (typeof Callback)['UpdateSpawn']>

export const extractEngineWatchDataArchetypeCallbacks = async (
    archetype: EngineWatchDataArchetype,
    watchData: EngineWatchData,
    dev: string,
): Promise<void> => {
    const print = createNodePrinter(watchData.nodes)

    await Promise.all(
        Object.values(Callback)
            .filter((name): name is ArchetypeCallback => name !== Callback.UpdateSpawn)
            .map((name) => [name, archetype[name]])
            .filter((kvp): kvp is [ArchetypeCallback, EngineWatchDataArchetypeCallback] => !!kvp[1])
            .map(([name, callback]) => extract(name, callback, archetype, print, dev)),
    )
}

const extract = async (
    name: Callback,
    callback: EngineWatchDataArchetypeCallback,
    archetype: EngineWatchDataArchetype,
    print: (index: number) => string[],
    dev: string,
) => {
    const js = [
        `// ${archetype.name}.${name}()`,
        `// order = ${callback.order ?? 0}`,
        '',
        ...print(callback.index),
        '',
    ].join('\n')

    await writeJs(js, [dev, 'engine', 'watchData', 'archetypes', `${archetype.name}`, `${name}.js`])
}
