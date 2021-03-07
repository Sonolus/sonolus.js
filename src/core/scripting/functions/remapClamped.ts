import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function RemapClamped(
    a: Code<number>,
    b: Code<number>,
    c: Code<number>,
    d: Code<number>,
    x: Code<number>
): Node<number> {
    return new FuncNode('RemapClamped', [
        parse(a),
        parse(b),
        parse(c),
        parse(d),
        parse(x),
    ])
}
