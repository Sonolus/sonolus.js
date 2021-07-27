import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Clamp(
    x: Code<number>,
    a: Code<number>,
    b: Code<number>
): Node<number> {
    return new FuncNode('Clamp', [parse(x), parse(a), parse(b)])
}
