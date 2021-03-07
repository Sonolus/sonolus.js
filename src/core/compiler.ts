import { Code, parse } from './scripting/code'
import { convert } from './scripting/dataType'
import { Node } from './scripting/node'
import { SNode } from './sonolus/node'

export function compile(
    code: Code,
    nodes: SNode[],
    markers: [string, number][] = []
): number {
    const index = insert(parse(code), nodes, markers)

    nodes.forEach((node) => delete node.marker)

    return index
}

function insert(
    node: Node,
    nodes: SNode[],
    markers: [string, number][]
): number {
    if (node.index !== undefined) {
        return node.index
    } else {
        if ('func' in node) {
            const args: number[] = []
            const index =
                nodes.push({
                    func: node.func,
                    args,
                    marker: node.marker,
                }) - 1
            node.index = index

            if (node.marker !== undefined) {
                markers.push([node.marker, index])
            }

            node.args.forEach((arg) => args.push(insert(arg, nodes, markers)))

            return index
        } else {
            const value = convert(node.value)
            const existingIndex =
                node.marker !== undefined
                    ? -1
                    : nodes.findIndex(
                          (node) =>
                              'value' in node &&
                              node.value === value &&
                              node.marker === undefined
                      )
            const index =
                existingIndex === -1
                    ? nodes.push({
                          value,
                          marker: node.marker,
                      }) - 1
                    : existingIndex
            node.index = index

            if (node.marker !== undefined) {
                markers.push([node.marker, index])
            }

            return index
        }
    }
}
