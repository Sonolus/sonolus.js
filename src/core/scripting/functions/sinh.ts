import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Sinh(expr: Code<number>): Node<number> {
    return new FuncNode('Sinh', [parse(expr)])
}
