import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

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
    edge: 'L' | 'R' | 'B' | 'T',
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
    edge: 'LR' | 'BT',
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
    edge: 'L' | 'R' | 'B' | 'T' | 'LR' | 'BT',
    cx1: Code<number>,
    cy1: Code<number>,
    cx2?: Code<number>,
    cy2?: Code<number>
): Node<0> {
    const functionName = `DrawCurved${edge}` as const
    switch (edge) {
        case 'L':
        case 'R':
        case 'B':
        case 'T':
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
        case 'LR':
        case 'BT':
            if (!cx2 || !cy2) throw 'Unexpected missing argument: cx2, cy2'

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
                parse(cx2),
                parse(cy2),
            ])
    }
}
