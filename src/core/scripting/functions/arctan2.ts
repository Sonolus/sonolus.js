import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Arctan2(y: Code<number>, x: Code<number>): Node<number> {
    return new FuncNode('Arctan2', [parse(y), parse(x)])
}
