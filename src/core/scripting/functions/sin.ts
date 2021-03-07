import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Sin(expr: Code<number>): Node<number> {
    return new FuncNode('Sin', [parse(expr)])
}
