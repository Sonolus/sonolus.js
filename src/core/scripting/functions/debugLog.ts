import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function DebugLog(value: Code): Node<0> {
    return new FuncNode('DebugLog', [parse(value)])
}
