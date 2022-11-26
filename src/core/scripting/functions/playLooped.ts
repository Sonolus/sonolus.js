import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function PlayLooped(id: Code<number>): Node<0> {
    return new FuncNode('PlayLooped', [parse(id)])
}
