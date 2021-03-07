import { FuncNode, Node } from '../node'

export function DebugPause(): Node<0> {
    return new FuncNode('DebugPause', [])
}
