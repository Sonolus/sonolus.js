import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Subtract(...exprs: Code<number>[]): Node<number> {
    return new FuncNode('Subtract', exprs.map(parse))
}
