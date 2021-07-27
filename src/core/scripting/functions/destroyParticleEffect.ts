import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function DestroyParticleEffect(id: Code<number>): Node<0> {
    return new FuncNode('DestroyParticleEffect', [parse(id)])
}
