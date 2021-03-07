import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Log(expr: Code<number>): Node<number> {
    return new FuncNode('Log', [parse(expr)])
}
