import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Frac(expr: Code<number>): Node<number> {
    return new FuncNode('Frac', [parse(expr)])
}
