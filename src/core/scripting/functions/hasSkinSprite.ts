import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function HasSkinSprite(id: Code<number>): Node<boolean> {
    return new FuncNode('HasSkinSprite', [parse(id)])
}
