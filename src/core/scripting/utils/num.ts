import { Code, parse } from '../code'
import { Node } from '../node'

export function num(code: Code): Node<number> {
    return parse(code) as Node<number>
}
