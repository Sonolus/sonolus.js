import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Arccos(expr: Code<number>): Node<number> {
    return new FuncNode('Arccos', [parse(expr)])
}
