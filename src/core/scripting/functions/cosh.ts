import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Cosh(expr: Code<number>): Node<number> {
    return new FuncNode('Cosh', [parse(expr)])
}
