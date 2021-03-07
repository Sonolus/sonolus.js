import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Mod(...exprs: Code<number>[]): Node<number> {
    return new FuncNode('Mod', exprs.map(parse))
}
