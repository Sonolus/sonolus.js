import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Ceil(expr: Code<number>): Node<number> {
    return new FuncNode('Ceil', [parse(expr)])
}
