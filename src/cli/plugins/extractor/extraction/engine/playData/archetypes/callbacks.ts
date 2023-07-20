import {
    EnginePlayData,
    EnginePlayDataArchetype,
    EnginePlayDataArchetypeCallback,
} from 'sonolus-core'
import { ArchetypeCallback } from 'sonolus.js-compiler/play'
import { writeJs } from '../../../utils.js'

export const extractEnginePlayDataArchetypeCallbacks = async (
    archetype: EnginePlayDataArchetype,
    playData: EnginePlayData,
    dev: string,
): Promise<void> => {
    const print = createNodePrinter(playData)

    await Promise.all(
        Object.values(ArchetypeCallback)
            .map((name) => [name, archetype[name]])
            .filter((kvp): kvp is [ArchetypeCallback, EnginePlayDataArchetypeCallback] => !!kvp[1])
            .map(([name, callback]) => extract(name, callback, archetype, print, dev)),
    )
}

const createNodePrinter = (playData: EnginePlayData) => {
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

        const node = playData.nodes[index]

        const text = 'value' in node ? [`${node.value}`] : format(node.func, node.args.map(get))
        cache.set(index, text)
        return text
    }

    return get
}

const extract = async (
    name: ArchetypeCallback,
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
