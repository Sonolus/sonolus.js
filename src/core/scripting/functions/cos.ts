import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Cos(expr: Code<number>): Node<number> {
    return new FuncNode('Cos', [parse(expr)])
}
