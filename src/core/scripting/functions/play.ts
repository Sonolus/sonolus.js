import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Play(id: Code<number>, dist: Code<number>): Node<0> {
    return new FuncNode('Play', [parse(id), parse(dist)])
}
