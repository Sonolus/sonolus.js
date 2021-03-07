import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Tanh(expr: Code<number>): Node<number> {
    return new FuncNode('Tanh', [parse(expr)])
}
