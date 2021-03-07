import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export enum Direction {
    In,
    Out,
    InOut,
}

export enum Type {
    Sine,
    Quad,
    Cubic,
    Quart,
    Quint,
    Expo,
    Circ,
    Back,
    Elastic,
}

export function Ease(
    x: Code<number>,
    direction: Direction,
    type: Type
): Node<number> {
    return new FuncNode(`Ease${Direction[direction]}${Type[type]}`, [parse(x)])
}
