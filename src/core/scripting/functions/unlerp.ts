import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Unlerp(
    a: Code<number>,
    b: Code<number>,
    x: Code<number>
): Node<number> {
    return new FuncNode('Unlerp', [parse(a), parse(b), parse(x)])
}
