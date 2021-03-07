import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Power(...exprs: Code<number>[]): Node<number> {
    return new FuncNode('Power', exprs.map(parse))
}
