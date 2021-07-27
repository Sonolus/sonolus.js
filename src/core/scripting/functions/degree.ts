import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Degree(expr: Code<number>): Node<number> {
    return new FuncNode('Degree', [parse(expr)])
}
