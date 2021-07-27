import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Arctan(expr: Code<number>): Node<number> {
    return new FuncNode('Arctan', [parse(expr)])
}
