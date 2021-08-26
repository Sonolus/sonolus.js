import { Code } from '../code'
import { Add, Multiply } from '../functions'
import { Node } from '../node'

export function customSkinSprite(
    engineId: Code<number>,
    spriteId: Code<number>
): Node<number> {
    return Add(100000, Multiply(engineId, 100), spriteId)
}

export function customEffectClip(
    engineId: Code<number>,
    clipId: Code<number>
): Node<number> {
    return Add(100000, Multiply(engineId, 100), clipId)
}
