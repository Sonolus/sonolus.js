import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function RandomInteger(
    min: Code<number>,
    max: Code<number>
): Node<number> {
    return new FuncNode('RandomInteger', [parse(min), parse(max)])
}
