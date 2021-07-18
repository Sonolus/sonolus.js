import { Code, parse } from '../code'
import { DataType } from '../dataType'
import { FuncNode, Node } from '../node'

export function SwitchInteger<T extends DataType>(
    condition: Code<number>,
    cases: Code<T>[],
    defaultCase: Code<T>
): Node<T>
export function SwitchInteger(
    condition: Code<number>,
    cases: Code[],
    defaultCase: Code
): Node
export function SwitchInteger<T extends number>(
    condition: Code<number>,
    cases: Code<T>[]
): Node<T | 0>
export function SwitchInteger<T extends boolean>(
    condition: Code<number>,
    cases: Code<T>[]
): Node<T | false>
export function SwitchInteger(condition: Code<number>, cases: Code[]): Node
export function SwitchInteger(
    condition: Code<number>,
    cases: Code[],
    defaultCase?: Code
): Node {
    if (defaultCase) {
        return new FuncNode('SwitchIntegerWithDefault', [
            parse(condition),
            ...cases.map(parse),
            parse(defaultCase),
        ])
    } else {
        return new FuncNode('SwitchInteger', [
            parse(condition),
            ...cases.map(parse),
        ])
    }
}
