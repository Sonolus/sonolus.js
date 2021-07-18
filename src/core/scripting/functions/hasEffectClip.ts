import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function HasEffectClip(id: Code<number>): Node<boolean> {
    return new FuncNode('HasEffectClip', [parse(id)])
}
