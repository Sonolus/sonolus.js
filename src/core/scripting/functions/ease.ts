import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Ease(
    x: Code<number>,
    direction: 'In' | 'Out' | 'InOut' | 'OutIn',
    type:
        | 'Sine'
        | 'Quad'
        | 'Cubic'
        | 'Quart'
        | 'Quint'
        | 'Expo'
        | 'Circ'
        | 'Back'
        | 'Elastic'
): Node<number> {
    return new FuncNode(`Ease${direction}${type}`, [parse(x)])
}
