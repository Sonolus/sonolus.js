import { format } from 'prettier'

import { Code } from './scripting/code'
import { parse } from './scripting/code'
import { convert } from './scripting/dataType'
import { Node } from './scripting/node'

export function visualize(code: Code): string {
    return format(stringify(parse(code)), {
        parser: 'babel',
        tabWidth: 4,
        semi: false,
    })
}

function stringify(node: Node): string {
    if ('func' in node) {
        return `${node.func}(${node.args.map(stringify).join(',')})`
    } else {
        return convert(node.value).toString()
    }
}
