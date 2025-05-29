// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import * as compiler from '@sonolus/sonolus.js-compiler/play'

Object.assign(globalThis, compiler)

type Compiler = typeof compiler

declare global {
    const Archetype: Compiler['Archetype']
    type Archetype = import('@sonolus/sonolus.js-compiler/play').Archetype
    const SpawnableArchetype: Compiler['SpawnableArchetype']
    type SpawnableArchetype<
        T extends import('@sonolus/sonolus.js-compiler/play').SpawnDataDefinition,
    > = import('@sonolus/sonolus.js-compiler/play').SpawnableArchetype<T>

    const levelData: Compiler['levelData']
    const levelMemory: Compiler['levelMemory']

    const Collection: Compiler['Collection']
    type Collection<T> = import('@sonolus/sonolus.js-compiler/play').Collection<T>
    const Container: Compiler['Container']
    const ContainerType: Compiler['ContainerType']
    type ContainerType<T> = import('@sonolus/sonolus.js-compiler/play').ContainerType<T>
    const DataType: Compiler['DataType']
    type DataType<T extends number | boolean> =
        import('@sonolus/sonolus.js-compiler/play').DataType<T>
    const Dictionary: Compiler['Dictionary']
    type Dictionary<K, V> = import('@sonolus/sonolus.js-compiler/play').Dictionary<K, V>
    const Mat: Compiler['Mat']
    type Mat = import('@sonolus/sonolus.js-compiler/play').Mat
    type MatLike = import('@sonolus/sonolus.js-compiler/play').MatLike
    const Quad: Compiler['Quad']
    type Quad = import('@sonolus/sonolus.js-compiler/play').Quad
    type QuadLike = import('@sonolus/sonolus.js-compiler/play').QuadLike
    const Range: Compiler['Range']
    type Range = import('@sonolus/sonolus.js-compiler/play').Range
    type RangeLike = import('@sonolus/sonolus.js-compiler/play').RangeLike
    const Rect: Compiler['Rect']
    type Rect = import('@sonolus/sonolus.js-compiler/play').Rect
    type RectLike = import('@sonolus/sonolus.js-compiler/play').RectLike
    const Tuple: Compiler['Tuple']
    type Tuple<T> = import('@sonolus/sonolus.js-compiler/play').Tuple<T>
    const Vec: Compiler['Vec']
    type Vec = import('@sonolus/sonolus.js-compiler/play').Vec
    type VecLike = import('@sonolus/sonolus.js-compiler/play').VecLike

    const defineArchetypes: Compiler['defineArchetypes']
    const defineBuckets: Compiler['defineBuckets']
    type Bucket = import('@sonolus/sonolus.js-compiler/play').Bucket
    const defineEffect: Compiler['defineEffect']
    type EffectClip = import('@sonolus/sonolus.js-compiler/play').EffectClip
    const defineOptions: Compiler['defineOptions']
    const defineParticle: Compiler['defineParticle']
    type ParticleEffect = import('@sonolus/sonolus.js-compiler/play').ParticleEffect
    const defineSkin: Compiler['defineSkin']
    type SkinSprite = import('@sonolus/sonolus.js-compiler/play').SkinSprite

    const Callback: Compiler['Callback']
    type Callback = import('@sonolus/sonolus.js-compiler/play').Callback
    const EntityState: Compiler['EntityState']
    type EntityState = import('@sonolus/sonolus.js-compiler/play').EntityState
    const HorizontalAlign: Compiler['HorizontalAlign']
    type HorizontalAlign = import('@sonolus/sonolus.js-compiler/play').HorizontalAlign
    const Judgment: Compiler['Judgment']
    type Judgment = import('@sonolus/sonolus.js-compiler/play').Judgment

    const EffectClipId: Compiler['EffectClipId']
    type EffectClipId = import('@sonolus/sonolus.js-compiler/play').EffectClipId
    const ParticleEffectId: Compiler['ParticleEffectId']
    type ParticleEffectId = import('@sonolus/sonolus.js-compiler/play').ParticleEffectId
    const SkinSpriteId: Compiler['SkinSpriteId']
    type SkinSpriteId = import('@sonolus/sonolus.js-compiler/play').SkinSpriteId

    const LoopedEffectClipInstanceId: Compiler['LoopedEffectClipInstanceId']
    type LoopedEffectClipInstanceId =
        import('@sonolus/sonolus.js-compiler/play').LoopedEffectClipInstanceId
    const ParticleEffectInstanceId: Compiler['ParticleEffectInstanceId']
    type ParticleEffectInstanceId =
        import('@sonolus/sonolus.js-compiler/play').ParticleEffectInstanceId
    const ScheduledLoopedEffectClipInstanceId: Compiler['ScheduledLoopedEffectClipInstanceId']
    type ScheduledLoopedEffectClipInstanceId =
        import('@sonolus/sonolus.js-compiler/play').ScheduledLoopedEffectClipInstanceId
    const TouchId: Compiler['TouchId']
    type TouchId = import('@sonolus/sonolus.js-compiler/play').TouchId

    const audio: Compiler['audio']
    const background: Compiler['background']
    const bpmChanges: Compiler['bpmChanges']
    type BpmChange = import('@sonolus/sonolus.js-compiler/play').BpmChange
    const compiler: Compiler['compiler']
    const debug: Compiler['debug']
    const entityInfos: Compiler['entityInfos']
    type EntityInfo = import('@sonolus/sonolus.js-compiler/play').EntityInfo
    const input: Compiler['input']
    type JudgmentWindows = import('@sonolus/sonolus.js-compiler/play').JudgmentWindows
    const life: Compiler['life']
    type ArchetypeLife = import('@sonolus/sonolus.js-compiler/play').ArchetypeLife
    type ConsecutiveLife = import('@sonolus/sonolus.js-compiler/play').ConsecutiveLife
    const multiplayer: Compiler['multiplayer']
    const native: Compiler['native']
    const score: Compiler['score']
    type ConsecutiveScore = import('@sonolus/sonolus.js-compiler/play').ConsecutiveScore
    const screen: Compiler['screen']
    const streams: Compiler['streams']
    const time: Compiler['time']
    const timeScaleChanges: Compiler['timeScaleChanges']
    type TimeScaleChange = import('@sonolus/sonolus.js-compiler/play').TimeScaleChange
    const touches: Compiler['touches']
    type Touch = import('@sonolus/sonolus.js-compiler/play').Touch
    const ui: Compiler['ui']
    type UI = import('@sonolus/sonolus.js-compiler/play').UI
    type UIConfiguration = import('@sonolus/sonolus.js-compiler/play').UIConfiguration
}
