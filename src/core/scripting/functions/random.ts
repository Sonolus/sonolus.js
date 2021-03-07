import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Random(min: Code<number>, max: Code<number>): Node<number> {
    return new FuncNode('Random', [parse(min), parse(max)])
}
