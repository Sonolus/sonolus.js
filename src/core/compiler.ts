import { EngineDataNode } from 'sonolus-core'
import { convertValue } from './scripting'
import { Code, parse } from './scripting/code'
import { Node } from './scripting/node'

export type CompileEnvironment = {
    nodes: EngineDataNode[]
    cache?: Map<string, number>
}

export function compile(code: Code, environment: CompileEnvironment): number {
    if (!environment.cache) {
        environment.cache = new Map()
    }

    return insert(parse(code), environment).index
}

function insert(
    node: Node,
    environment: CompileEnvironment
): {
    id: string
    index: number
} {
    if ('func' in node) {
        const results = node.args.map((arg) => insert(arg, environment))
        const id = `${node.func}(${results.map(({ id }) => id).join(',')})`
        return {
            id,
            index: getOrAddIndex(
                id,
                () => ({
                    func: node.func,
                    args: results.map(({ index }) => index),
                }),
                environment
            ),
        }
    } else {
        const value = convertValue(node.value)
        const id = value.toString()
        return {
            id,
            index: getOrAddIndex(
                id,
                () => ({
                    value,
                }),
                environment
            ),
        }
    }
}

function getOrAddIndex(
    id: string,
    create: () => EngineDataNode,
    environment: CompileEnvironment
) {
    if (!environment.cache) throw 'Unexpected missing environment cache'

    const index = environment.cache.get(id)
    if (index !== undefined) {
        return index
    } else {
        const newIndex = environment.nodes.push(create()) - 1
        environment.cache.set(id, newIndex)
        return newIndex
    }
}
