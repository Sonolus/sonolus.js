import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export enum Edge {
    L,
    R,
    B,
    T,
    LR,
    BT,
}

export function DrawCurved(
    id: Code<number>,
    x1: Code<number>,
    y1: Code<number>,
    x2: Code<number>,
    y2: Code<number>,
    x3: Code<number>,
    y3: Code<number>,
    x4: Code<number>,
    y4: Code<number>,
    z: Code<number>,
    a: Code<number>,
    n: Code<number>,
    edge: Edge.L | Edge.R | Edge.B | Edge.T,
    cx: Code<number>,
    cy: Code<number>
): Node<0>
export function DrawCurved(
    id: Code<number>,
    x1: Code<number>,
    y1: Code<number>,
    x2: Code<number>,
    y2: Code<number>,
    x3: Code<number>,
    y3: Code<number>,
    x4: Code<number>,
    y4: Code<number>,
    z: Code<number>,
    a: Code<number>,
    n: Code<number>,
    edge: Edge.LR | Edge.BT,
    cx1: Code<number>,
    cy1: Code<number>,
    cx2: Code<number>,
    cy2: Code<number>
): Node<0>
export function DrawCurved(
    id: Code<number>,
    x1: Code<number>,
    y1: Code<number>,
    x2: Code<number>,
    y2: Code<number>,
    x3: Code<number>,
    y3: Code<number>,
    x4: Code<number>,
    y4: Code<number>,
    z: Code<number>,
    a: Code<number>,
    n: Code<number>,
    edge: Edge,
    cx1: Code<number>,
    cy1: Code<number>,
    cx2?: Code<number>,
    cy2?: Code<number>
): Node<0> {
    const functionName = `DrawCurved${Edge[edge]}`
    switch (edge) {
        case Edge.L:
        case Edge.R:
        case Edge.B:
        case Edge.T:
            return new FuncNode(functionName, [
                parse(id),
                parse(x1),
                parse(y1),
                parse(x2),
                parse(y2),
                parse(x3),
                parse(y3),
                parse(x4),
                parse(y4),
                parse(z),
                parse(a),
                parse(n),
                parse(cx1),
                parse(cy1),
            ])
        case Edge.LR:
        case Edge.BT:
            return new FuncNode(functionName, [
                parse(id),
                parse(x1),
                parse(y1),
                parse(x2),
                parse(y2),
                parse(x3),
                parse(y3),
                parse(x4),
                parse(y4),
                parse(z),
                parse(a),
                parse(n),
                parse(cx1),
                parse(cy1),
                parse(cx2!),
                parse(cy2!),
            ])
    }
}
