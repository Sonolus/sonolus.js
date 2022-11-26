import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function StopLooped(id: Code<number>): Node<0> {
    return new FuncNode('StopLooped', [parse(id)])
}
