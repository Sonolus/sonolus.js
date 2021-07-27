import { Code, parse } from '../code'
import { DataType } from '../dataType'
import { FuncNode, Node } from '../node'

export function Greater<T extends DataType>(
    a: Code<T>,
    b: Code<T>
): Node<boolean> {
    return new FuncNode('Greater', [parse(a), parse(b)])
}
