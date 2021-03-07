import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Arcsin(expr: Code<number>): Node<number> {
    return new FuncNode('Arcsin', [parse(expr)])
}
