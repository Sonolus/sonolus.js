import { EngineData, EngineDataArchetype } from 'sonolus-core'
import { EngineDataArchetypeCallback } from 'sonolus-core/dist/common/core/engine/data/archetype.js'
import { writeJs } from '../../../utils.js'

const Callbacks = [
    'preprocess',
    'spawnOrder',
    'shouldSpawn',
    'initialize',
    'updateSequential',
    'touch',
    'updateParallel',
    'terminate',
] as const
type Callback = (typeof Callbacks)[number]

export const extractEngineDataArchetypeCallbacks = async (
    archetype: EngineDataArchetype,
    data: EngineData,
    dev: string,
): Promise<void> => {
    const print = createNodePrinter(data)

    await Promise.all(
        Callbacks.map((name) => [name, archetype[name]])
            .filter((kvp): kvp is [Callback, EngineDataArchetypeCallback] => !!kvp[1])
            .map(([name, callback]) => extract(name, callback, archetype, print, dev)),
    )
}

const createNodePrinter = (data: EngineData) => {
    const cache = new Map<number, string[]>()

    const shouldWrap = (func: string, args: string[][]) => {
        if (args.some((lines) => lines.length > 1)) return true

        return args.reduce((sum, lines) => sum + lines[0].length + 2, func.length) > 80
    }

    const indentAndAddComma = (lines: string[]) => {
        const result = lines.map((line) => `  ${line}`)
        result[result.length - 1] += ','
        return result
    }

    const format = (func: string, args: string[][]) => {
        if (!shouldWrap(func, args)) return [`${func}(${args.flat().join(', ')})`]

        return [`${func}(`, ...args.flatMap(indentAndAddComma), ')']
    }

    const get = (index: number): string[] => {
        const result = cache.get(index)
        if (result !== undefined) return result

        const node = data.nodes[index]

        const text = 'value' in node ? [`${node.value}`] : format(node.func, node.args.map(get))
        cache.set(index, text)
        return text
    }

    return get
}

const extract = async (
    name: Callback,
    callback: EngineDataArchetypeCallback,
    archetype: EngineDataArchetype,
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

    await writeJs(js, [dev, 'engine', 'data', 'archetypes', `${archetype.name}`, `${name}.js`])
}
