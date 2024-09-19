// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import * as compiler from '@sonolus/sonolus.js-compiler/shared'

Object.assign(globalThis, compiler)

type Compiler = typeof compiler

declare global {
    const Collection: Compiler['Collection']
    type Collection<T> = import('@sonolus/sonolus.js-compiler/shared').Collection<T>
    const Container: Compiler['Container']
    const ContainerType: Compiler['ContainerType']
    type ContainerType<T> = import('@sonolus/sonolus.js-compiler/shared').ContainerType<T>
    const DataType: Compiler['DataType']
    type DataType<T extends number | boolean> =
        import('@sonolus/sonolus.js-compiler/shared').DataType<T>
    const Dictionary: Compiler['Dictionary']
    type Dictionary<K, V> = import('@sonolus/sonolus.js-compiler/shared').Dictionary<K, V>
    const Mat: Compiler['Mat']
    type Mat = import('@sonolus/sonolus.js-compiler/shared').Mat
    type MatLike = import('@sonolus/sonolus.js-compiler/shared').MatLike
    const Quad: Compiler['Quad']
    type Quad = import('@sonolus/sonolus.js-compiler/shared').Quad
    type QuadLike = import('@sonolus/sonolus.js-compiler/shared').QuadLike
    const Range: Compiler['Range']
    type Range = import('@sonolus/sonolus.js-compiler/shared').Range
    type RangeLike = import('@sonolus/sonolus.js-compiler/shared').RangeLike
    const Rect: Compiler['Rect']
    type Rect = import('@sonolus/sonolus.js-compiler/shared').Rect
    type RectLike = import('@sonolus/sonolus.js-compiler/shared').RectLike
    const Tuple: Compiler['Tuple']
    type Tuple<T> = import('@sonolus/sonolus.js-compiler/shared').Tuple<T>
    const Vec: Compiler['Vec']
    type Vec = import('@sonolus/sonolus.js-compiler/shared').Vec
    type VecLike = import('@sonolus/sonolus.js-compiler/shared').VecLike

    const EffectClipId: Compiler['EffectClipId']
    type EffectClipId = import('@sonolus/sonolus.js-compiler/shared').EffectClipId
    const ParticleEffectId: Compiler['ParticleEffectId']
    type ParticleEffectId = import('@sonolus/sonolus.js-compiler/shared').ParticleEffectId
    const SkinSpriteId: Compiler['SkinSpriteId']
    type SkinSpriteId = import('@sonolus/sonolus.js-compiler/shared').SkinSpriteId

    const LoopedEffectClipInstanceId: Compiler['LoopedEffectClipInstanceId']
    type LoopedEffectClipInstanceId =
        import('@sonolus/sonolus.js-compiler/shared').LoopedEffectClipInstanceId
    const ParticleEffectInstanceId: Compiler['ParticleEffectInstanceId']
    type ParticleEffectInstanceId =
        import('@sonolus/sonolus.js-compiler/shared').ParticleEffectInstanceId
    const ScheduledLoopedEffectClipInstanceId: Compiler['ScheduledLoopedEffectClipInstanceId']
    type ScheduledLoopedEffectClipInstanceId =
        import('@sonolus/sonolus.js-compiler/shared').ScheduledLoopedEffectClipInstanceId

    type JudgmentWindows = import('@sonolus/sonolus.js-compiler/shared').JudgmentWindows
    const native: Compiler['native']
}
