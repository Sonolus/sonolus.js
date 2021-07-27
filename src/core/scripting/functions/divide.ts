import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Divide(...exprs: Code<number>[]): Node<number> {
    return new FuncNode('Divide', exprs.map(parse))
}
