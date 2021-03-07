import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Remap(
    a: Code<number>,
    b: Code<number>,
    c: Code<number>,
    d: Code<number>,
    x: Code<number>
): Node<number> {
    return new FuncNode('Remap', [
        parse(a),
        parse(b),
        parse(c),
        parse(d),
        parse(x),
    ])
}
