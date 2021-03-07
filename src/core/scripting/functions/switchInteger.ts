import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function SwitchInteger(
    condition: Code<number>,
    cases: Code[],
    defaultCase?: Code
): Node<0> {
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
