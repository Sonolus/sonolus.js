import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Smoothstep(
    a: Code<number>,
    b: Code<number>,
    x: Code<number>
): Node<number> {
    return new FuncNode('Smoothstep', [parse(a), parse(b), parse(x)])
}
