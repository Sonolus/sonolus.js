import { Code } from '../code'
import { parse } from '../code'
import { DataType } from '../dataType'
import { FuncNode, Node } from '../node'

export function If<T extends DataType, U extends DataType>(
    condition: Code<boolean>,
    doTrue: Code<T>,
    doFalse: Code<U>
): Node<T | U> {
    return new FuncNode('If', [parse(condition), parse(doTrue), parse(doFalse)])
}
