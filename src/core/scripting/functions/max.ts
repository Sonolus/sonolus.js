import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Max(a: Code<number>, b: Code<number>): Node<number> {
    return new FuncNode('Max', [parse(a), parse(b)])
}
