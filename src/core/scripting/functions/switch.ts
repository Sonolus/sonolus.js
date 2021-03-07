import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function Switch(
    condition: Code<number>,
    cases: [Code<number>, Code][],
    defaultCase?: Code
): Node<0> {
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
