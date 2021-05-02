import { Code } from '../code'
import { parse } from '../code'
import { DataType } from '../dataType'
import { FuncNode, Node } from '../node'

export function Or<T extends DataType>(
    ...exprs: [...Code<boolean>[], Code<T>]
): Node<true | T>
export function Or(...exprs: Code<boolean>[]): Node<boolean>
export function Or(...exprs: Code[]) {
    return new FuncNode('Or', exprs.map(parse))
}
