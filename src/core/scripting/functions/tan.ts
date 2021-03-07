import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Tan(expr: Code<number>): Node<number> {
    return new FuncNode('Tan', [parse(expr)])
}
