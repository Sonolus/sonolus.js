import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function StopLoopedScheduled(
    id: Code<number>,
    t: Code<number>
): Node<0> {
    return new FuncNode('StopLoopedScheduled', [parse(id), parse(t)])
}
