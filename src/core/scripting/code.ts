import { DataType } from './dataType'
import { Execute } from './functions/execute'
import { Node, ValueNode } from './node'
import { Pointer } from './pointer'

export type Code<T extends DataType = DataType> =
    | Node<T>
    | T
    | [...Code[], Code<T>]
    | Code<T>[]
    | Pointer<T>

export function parse<T extends DataType>(code: Code<T>): Node<T> {
    if (typeof code === 'object') {
        if (Array.isArray(code)) {
            return Execute(...(code as Code<T>[]))
        } else if (code instanceof Pointer) {
            return code.get()
        } else {
            return code
        }
    } else {
        return new ValueNode(code)
    }
}
