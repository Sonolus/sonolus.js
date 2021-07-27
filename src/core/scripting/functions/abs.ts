import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Abs(expr: Code<number>): Node<number> {
    return new FuncNode('Abs', [parse(expr)])
}
