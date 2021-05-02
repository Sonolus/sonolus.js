import { Code } from '../code'
import { parse } from '../code'
import { DataType } from '../dataType'
import { FuncNode, Node } from '../node'

export function And<T extends DataType>(
    ...exprs: [...Code<boolean>[], Code<T>]
): Node<false | T>
export function And(...exprs: Code<boolean>[]): Node<boolean>
export function And(...exprs: Code[]) {
    return new FuncNode('And', exprs.map(parse))
}
