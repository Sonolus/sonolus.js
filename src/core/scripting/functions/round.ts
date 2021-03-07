import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Round(expr: Code<number>): Node<number> {
    return new FuncNode('Round', [parse(expr)])
}
