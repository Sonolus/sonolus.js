import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Trunc(expr: Code<number>): Node<number> {
    return new FuncNode('Trunc', [parse(expr)])
}
