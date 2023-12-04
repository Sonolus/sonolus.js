import {
    EnginePlayData,
    EnginePlayDataArchetype,
    EnginePlayDataArchetypeCallback,
} from 'sonolus-core'
import { Callback } from 'sonolus.js-compiler/play'
import { createNodePrinter } from '../../../../../shared/printer.js'
import { writeJs } from '../../../../../shared/utils.js'

export const extractEnginePlayDataArchetypeCallbacks = async (
    archetype: EnginePlayDataArchetype,
    playData: EnginePlayData,
    dev: string,
): Promise<void> => {
    const print = createNodePrinter(playData.nodes)

    await Promise.all(
        Object.values(Callback)
            .map((name) => [name, archetype[name]])
            .filter((kvp): kvp is [Callback, EnginePlayDataArchetypeCallback] => !!kvp[1])
            .map(([name, callback]) => extract(name, callback, archetype, print, dev)),
    )
}

const extract = async (
    name: Callback,
    callback: EnginePlayDataArchetypeCallback,
    archetype: EnginePlayDataArchetype,
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

    await writeJs(js, [dev, 'engine', 'playData', 'archetypes', `${archetype.name}`, `${name}.js`])
}
