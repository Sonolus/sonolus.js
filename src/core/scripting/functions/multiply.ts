import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Multiply(...exprs: Code<number>[]): Node<number> {
    return new FuncNode('Multiply', exprs.map(parse))
}
