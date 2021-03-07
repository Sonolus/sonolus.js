import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Sign(expr: Code<number>): Node<number> {
    return new FuncNode('Sign', [parse(expr)])
}
