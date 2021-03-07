import { Code } from '../code'
import { parse } from '../code'
import { DataType } from '../dataType'
import { FuncNode, Node } from '../node'

export function Execute<T extends DataType>(
    ...exprs: [...Code[], Code<T>]
): Node<T> {
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
        return parse(exprs[0] as Code<T>)
    }
}
