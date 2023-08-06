// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import * as compiler from 'sonolus.js-compiler/shared'

Object.assign(globalThis, compiler)

type Compiler = typeof compiler

declare global {
    const Collection: Compiler['Collection']
    type Collection<T> = import('sonolus.js-compiler/shared').Collection<T>
    const Container: Compiler['Container']
    const ContainerType: Compiler['ContainerType']
    type ContainerType<T> = import('sonolus.js-compiler/shared').ContainerType<T>
    const DataType: Compiler['DataType']
    type DataType<T extends number | boolean> = import('sonolus.js-compiler/shared').DataType<T>
    const Dictionary: Compiler['Dictionary']
    type Dictionary<K, V> = import('sonolus.js-compiler/shared').Dictionary<K, V>
    const Mat: Compiler['Mat']
    type Mat = import('sonolus.js-compiler/shared').Mat
    type MatLike = import('sonolus.js-compiler/shared').MatLike
    const Quad: Compiler['Quad']
    type Quad = import('sonolus.js-compiler/shared').Quad
    type QuadLike = import('sonolus.js-compiler/shared').QuadLike
    const Rect: Compiler['Rect']
    type Rect = import('sonolus.js-compiler/shared').Rect
    type RectLike = import('sonolus.js-compiler/shared').RectLike
    const Tuple: Compiler['Tuple']
    type Tuple<T> = import('sonolus.js-compiler/shared').Tuple<T>
    const Vec: Compiler['Vec']
    type Vec = import('sonolus.js-compiler/shared').Vec
    type VecLike = import('sonolus.js-compiler/shared').VecLike

    const EffectClipId: Compiler['EffectClipId']
    type EffectClipId = import('sonolus.js-compiler/shared').EffectClipId
    const ParticleEffectId: Compiler['ParticleEffectId']
    type ParticleEffectId = import('sonolus.js-compiler/shared').ParticleEffectId
    const SkinSpriteId: Compiler['SkinSpriteId']
    type SkinSpriteId = import('sonolus.js-compiler/shared').SkinSpriteId

    const LoopedEffectClipInstanceId: Compiler['LoopedEffectClipInstanceId']
    type LoopedEffectClipInstanceId =
        import('sonolus.js-compiler/shared').LoopedEffectClipInstanceId
    const ParticleEffectInstanceId: Compiler['ParticleEffectInstanceId']
    type ParticleEffectInstanceId = import('sonolus.js-compiler/shared').ParticleEffectInstanceId
    const ScheduledLoopedEffectClipInstanceId: Compiler['ScheduledLoopedEffectClipInstanceId']
    type ScheduledLoopedEffectClipInstanceId =
        import('sonolus.js-compiler/shared').ScheduledLoopedEffectClipInstanceId

    type JudgmentWindow = import('sonolus.js-compiler/shared').JudgmentWindow
    type JudgmentWindows = import('sonolus.js-compiler/shared').JudgmentWindows
    const native: Compiler['native']
}
