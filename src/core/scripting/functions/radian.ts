import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Radian(expr: Code<number>): Node<number> {
    return new FuncNode('Radian', [parse(expr)])
}
