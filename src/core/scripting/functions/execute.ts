import { Code, parse } from '../code'
import { DataType } from '../dataType'
import { FuncNode, Node } from '../node'

export function Execute<T extends DataType>(
    ...exprs: [...Code[], Code<T>]
): Node<T>
export function Execute<T extends DataType>(...exprs: Code<T>[]): Node<T>
export function Execute(...exprs: Code[]): Node {
    if (exprs.length > 1) {
        return new FuncNode(
            'Execute',
            exprs
                .map(parse)
                .map((node) =>
                    'func' in node && node.func === 'Execute' ? node.args : node
                )
                .flat()
        )
    } else {
        return parse(exprs[0])
    }
}
