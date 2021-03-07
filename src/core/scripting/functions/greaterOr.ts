import { Code } from '../code'
import { parse } from '../code'
import { DataType } from '../dataType'
import { FuncNode, Node } from '../node'

export function GreaterOr<T extends DataType>(
    a: Code<T>,
    b: Code<T>
): Node<boolean> {
    return new FuncNode('GreaterOr', [parse(a), parse(b)])
}
