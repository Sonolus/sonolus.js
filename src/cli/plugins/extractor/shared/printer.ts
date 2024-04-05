import { EngineDataNode } from '@sonolus/core'

export const createNodePrinter = (nodes: EngineDataNode[]): ((index: number) => string[]) => {
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

        const node = nodes[index]

        const text = 'value' in node ? [`${node.value}`] : format(node.func, node.args.map(get))
        cache.set(index, text)
        return text
    }

    return get
}
