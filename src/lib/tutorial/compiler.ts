// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import * as compiler from '@sonolus/sonolus.js-compiler/tutorial'

Object.assign(globalThis, compiler)

type Compiler = typeof compiler

declare global {
    const tutorialData: Compiler['tutorialData']
    const tutorialMemory: Compiler['tutorialMemory']

    const Collection: Compiler['Collection']
    type Collection<T> = import('@sonolus/sonolus.js-compiler/tutorial').Collection<T>
    const Container: Compiler['Container']
    const ContainerType: Compiler['ContainerType']
    type ContainerType<T> = import('@sonolus/sonolus.js-compiler/tutorial').ContainerType<T>
    const DataType: Compiler['DataType']
    type DataType<T extends number | boolean> =
        import('@sonolus/sonolus.js-compiler/tutorial').DataType<T>
    const Dictionary: Compiler['Dictionary']
    type Dictionary<K, V> = import('@sonolus/sonolus.js-compiler/tutorial').Dictionary<K, V>
    const Mat: Compiler['Mat']
    type Mat = import('@sonolus/sonolus.js-compiler/tutorial').Mat
    type MatLike = import('@sonolus/sonolus.js-compiler/tutorial').MatLike
    const Quad: Compiler['Quad']
    type Quad = import('@sonolus/sonolus.js-compiler/tutorial').Quad
    type QuadLike = import('@sonolus/sonolus.js-compiler/tutorial').QuadLike
    const Range: Compiler['Range']
    type Range = import('@sonolus/sonolus.js-compiler/tutorial').Range
    type RangeLike = import('@sonolus/sonolus.js-compiler/tutorial').RangeLike
    const Rect: Compiler['Rect']
    type Rect = import('@sonolus/sonolus.js-compiler/tutorial').Rect
    type RectLike = import('@sonolus/sonolus.js-compiler/tutorial').RectLike
    const Tuple: Compiler['Tuple']
    type Tuple<T> = import('@sonolus/sonolus.js-compiler/tutorial').Tuple<T>
    const Vec: Compiler['Vec']
    type Vec = import('@sonolus/sonolus.js-compiler/tutorial').Vec
    type VecLike = import('@sonolus/sonolus.js-compiler/tutorial').VecLike

    const defineEffect: Compiler['defineEffect']
    type EffectClip = import('@sonolus/sonolus.js-compiler/tutorial').EffectClip
    const defineInstruction: Compiler['defineInstruction']
    type InstructionText = import('@sonolus/sonolus.js-compiler/tutorial').InstructionText
    const defineOptions: Compiler['defineOptions']
    const defineParticle: Compiler['defineParticle']
    type ParticleEffect = import('@sonolus/sonolus.js-compiler/tutorial').ParticleEffect
    const defineSkin: Compiler['defineSkin']
    type SkinSprite = import('@sonolus/sonolus.js-compiler/tutorial').SkinSprite

    const NavigationDirection: Compiler['NavigationDirection']
    type NavigationDirection = import('@sonolus/sonolus.js-compiler/tutorial').NavigationDirection
    const TutorialCallback: Compiler['TutorialCallback']
    type TutorialCallback = import('@sonolus/sonolus.js-compiler/tutorial').TutorialCallback

    const EffectClipId: Compiler['EffectClipId']
    type EffectClipId = import('@sonolus/sonolus.js-compiler/tutorial').EffectClipId
    const InstructionIconId: Compiler['InstructionIconId']
    type InstructionIconId = import('@sonolus/sonolus.js-compiler/tutorial').InstructionIconId
    const InstructionTextId: Compiler['InstructionTextId']
    type InstructionTextId = import('@sonolus/sonolus.js-compiler/tutorial').InstructionTextId
    const ParticleEffectId: Compiler['ParticleEffectId']
    type ParticleEffectId = import('@sonolus/sonolus.js-compiler/tutorial').ParticleEffectId
    const SkinSpriteId: Compiler['SkinSpriteId']
    type SkinSpriteId = import('@sonolus/sonolus.js-compiler/tutorial').SkinSpriteId

    const LoopedEffectClipInstanceId: Compiler['LoopedEffectClipInstanceId']
    type LoopedEffectClipInstanceId =
        import('@sonolus/sonolus.js-compiler/tutorial').LoopedEffectClipInstanceId
    const ParticleEffectInstanceId: Compiler['ParticleEffectInstanceId']
    type ParticleEffectInstanceId =
        import('@sonolus/sonolus.js-compiler/tutorial').ParticleEffectInstanceId
    const ScheduledLoopedEffectClipInstanceId: Compiler['ScheduledLoopedEffectClipInstanceId']
    type ScheduledLoopedEffectClipInstanceId =
        import('@sonolus/sonolus.js-compiler/tutorial').ScheduledLoopedEffectClipInstanceId

    const audio: Compiler['audio']
    const background: Compiler['background']
    const compiler: Compiler['compiler']
    const debug: Compiler['debug']
    type JudgmentWindows = import('@sonolus/sonolus.js-compiler/tutorial').JudgmentWindows
    const native: Compiler['native']
    const navigation: Compiler['navigation']
    const screen: Compiler['screen']
    const time: Compiler['time']
    const ui: Compiler['ui']
    type UI = import('@sonolus/sonolus.js-compiler/tutorial').UI
    type UIConfiguration = import('@sonolus/sonolus.js-compiler/tutorial').UIConfiguration
}
