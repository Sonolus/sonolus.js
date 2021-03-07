import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function While(condition: Code<boolean>, body: Code): Node<0> {
    return new FuncNode('While', [parse(condition), parse(body)])
}
