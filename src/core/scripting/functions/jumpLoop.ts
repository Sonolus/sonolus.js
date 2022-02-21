import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function JumpLoop<T extends number>(
    ...args: [...Code<number>[], Code<T>]
): Node<0 | T>
export function JumpLoop<T extends boolean>(
    ...args: [...Code<number>[], Code<T>]
): Node<false | T>
export function JumpLoop(...args: [...Code<number>[], Code]): Node {
    return new FuncNode('JumpLoop', args.map(parse))
}
