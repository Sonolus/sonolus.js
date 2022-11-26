import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function PlayLoopedScheduled(
    id: Code<number>,
    t: Code<number>
): Node<0> {
    return new FuncNode('PlayLoopedScheduled', [parse(id), parse(t)])
}
