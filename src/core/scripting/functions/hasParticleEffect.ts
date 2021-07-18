import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function HasParticleEffect(id: Code<number>): Node<boolean> {
    return new FuncNode('HasParticleEffect', [parse(id)])
}
