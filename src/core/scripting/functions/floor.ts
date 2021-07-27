import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Floor(expr: Code<number>): Node<number> {
    return new FuncNode('Floor', [parse(expr)])
}
