import { Code, parse } from '../code'
import { Node } from '../node'

export function bool(code: Code): Node<boolean> {
    return parse(code) as Node<boolean>
}
