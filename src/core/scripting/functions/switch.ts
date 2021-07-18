import { Code, parse } from '../code'
import { DataType } from '../dataType'
import { FuncNode, Node } from '../node'

export function Switch<T extends DataType>(
    condition: Code<number>,
    cases: [Code<number>, Code<T>][],
    defaultCase: Code<T>
): Node<T>
export function Switch(
    condition: Code<number>,
    cases: [Code<number>, Code][],
    defaultCase: Code
): Node
export function Switch<T extends number>(
    condition: Code<number>,
    cases: [Code<number>, Code<T>][]
): Node<T | 0>
export function Switch<T extends boolean>(
    condition: Code<number>,
    cases: [Code<number>, Code<T>][]
): Node<T | false>
export function Switch(
    condition: Code<number>,
    cases: [Code<number>, Code][]
): Node
export function Switch(
    condition: Code<number>,
    cases: [Code<number>, Code][],
    defaultCase?: Code
): Node {
    if (defaultCase) {
        return new FuncNode('SwitchWithDefault', [
            parse(condition),
            ...cases.flat().map(parse),
            parse(defaultCase),
        ])
    } else {
        return new FuncNode('Switch', [
            parse(condition),
            ...cases.flat().map(parse),
        ])
    }
}
