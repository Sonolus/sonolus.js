import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Min(a: Code<number>, b: Code<number>): Node<number> {
    return new FuncNode('Min', [parse(a), parse(b)])
}
