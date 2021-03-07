import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function PlayScheduled(
    id: Code<number>,
    t: Code<number>,
    dist: Code<number>
): Node<0> {
    return new FuncNode('PlayScheduled', [parse(id), parse(t), parse(dist)])
}
