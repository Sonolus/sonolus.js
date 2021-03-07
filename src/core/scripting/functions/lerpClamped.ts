import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function LerpClamped(
    a: Code<number>,
    b: Code<number>,
    x: Code<number>
): Node<number> {
    return new FuncNode('LerpClamped', [parse(a), parse(b), parse(x)])
}
