import { Code } from '../code'
import { parse } from '../code'
import { FuncNode, Node } from '../node'

export function SpawnParticleEffect(
    id: Code<number>,
    x1: Code<number>,
    y1: Code<number>,
    x2: Code<number>,
    y2: Code<number>,
    x3: Code<number>,
    y3: Code<number>,
    x4: Code<number>,
    y4: Code<number>,
    t: Code<number>,
    loop: Code<boolean>
): Node<number> {
    return new FuncNode('SpawnParticleEffect', [
        parse(id),
        parse(x1),
        parse(y1),
        parse(x2),
        parse(y2),
        parse(x3),
        parse(y3),
        parse(x4),
        parse(y4),
        parse(t),
        parse(loop),
    ])
}
