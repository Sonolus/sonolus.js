import { Code, parse } from '../code'
import { DataType } from '../dataType'
import { Node } from '../node'

export function mark<T extends DataType>(
    code: Code<T>,
    marker: string
): Node<T> {
    const node = parse(code)
    node.marker = marker
    return node
}
