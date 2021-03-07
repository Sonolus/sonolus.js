import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Add(...exprs: Code<number>[]): Node<number> {
    const args: Node<number>[] = []

    const numbers: number[] = []
    const nodes: Node<number>[] = []

    exprs
        .map(parse)
        .map((node) =>
            'func' in node && node.func === 'Add'
                ? (node.args as Node<number>[])
                : node
        )
        .flat()
        .forEach((expr) => {
            if ('func' in expr) {
                nodes.push(expr)
            } else {
                numbers.push(expr.value)
            }
        })

    const constant = numbers.reduce((sum, val) => sum + val, 0)
    if (constant) {
        args.push(parse(constant))
    }
    args.push(...nodes)

    switch (args.length) {
        case 0:
            return parse(0)
        case 1:
            return args[0]
        default:
            return new FuncNode('Add', args)
    }
}
