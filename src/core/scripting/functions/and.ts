import { Code } from '../code'
import { parse } from '../code'
import { DataType } from '../dataType'
import { FuncNode, Node } from '../node'

export function And<T extends DataType>(
    ...exprs: [...Code<boolean>[], Code<T>]
): Node<false | T> {
    return new FuncNode('And', exprs.map(parse))
}
