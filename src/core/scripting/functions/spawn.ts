import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Spawn(id: Code<number>, data: Code[]): Node<0> {
    return new FuncNode('Spawn', [parse(id), ...data.map(parse)])
}
