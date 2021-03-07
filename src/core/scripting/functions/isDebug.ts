import { FuncNode, Node } from '../node'

export function IsDebug(): Node<boolean> {
    return new FuncNode('IsDebug', [])
}
