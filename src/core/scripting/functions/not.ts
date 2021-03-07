import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Not(expr: Code<boolean>): Node<boolean> {
    return new FuncNode('Not', [parse(expr)])
}
