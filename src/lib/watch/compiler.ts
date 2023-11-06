// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import * as compiler from 'sonolus.js-compiler/watch'

Object.assign(globalThis, compiler)

type Compiler = typeof compiler

declare global {
    const Archetype: Compiler['Archetype']
    type Archetype = import('sonolus.js-compiler/watch').Archetype
    const SpawnableArchetype: Compiler['SpawnableArchetype']
    type SpawnableArchetype<T extends import('sonolus.js-compiler/play').SpawnDataDefinition> =
        import('sonolus.js-compiler/play').SpawnableArchetype<T>

    const levelData: Compiler['levelData']
    const levelMemory: Compiler['levelMemory']

    const Collection: Compiler['Collection']
    type Collection<T> = import('sonolus.js-compiler/watch').Collection<T>
    const Container: Compiler['Container']
    const ContainerType: Compiler['ContainerType']
    type ContainerType<T> = import('sonolus.js-compiler/watch').ContainerType<T>
    const DataType: Compiler['DataType']
    type DataType<T extends number | boolean> = import('sonolus.js-compiler/watch').DataType<T>
    const Dictionary: Compiler['Dictionary']
    type Dictionary<K, V> = import('sonolus.js-compiler/watch').Dictionary<K, V>
    const Mat: Compiler['Mat']
    type Mat = import('sonolus.js-compiler/watch').Mat
    type MatLike = import('sonolus.js-compiler/watch').MatLike
    const Quad: Compiler['Quad']
    type Quad = import('sonolus.js-compiler/watch').Quad
    type QuadLike = import('sonolus.js-compiler/watch').QuadLike
    const Rect: Compiler['Rect']
    type Rect = import('sonolus.js-compiler/watch').Rect
    type RectLike = import('sonolus.js-compiler/watch').RectLike
    const Tuple: Compiler['Tuple']
    type Tuple<T> = import('sonolus.js-compiler/watch').Tuple<T>
    const Vec: Compiler['Vec']
    type Vec = import('sonolus.js-compiler/watch').Vec
    type VecLike = import('sonolus.js-compiler/watch').VecLike

    const defineArchetypes: Compiler['defineArchetypes']
    const defineEffect: Compiler['defineEffect']
    type EffectClip = import('sonolus.js-compiler/watch').EffectClip
    const defineOptions: Compiler['defineOptions']
    const defineParticle: Compiler['defineParticle']
    type ParticleEffect = import('sonolus.js-compiler/watch').ParticleEffect
    const defineSkin: Compiler['defineSkin']
    type SkinSprite = import('sonolus.js-compiler/watch').SkinSprite

    const Callback: Compiler['Callback']
    type Callback = import('sonolus.js-compiler/watch').Callback
    const EntityState: Compiler['EntityState']
    type EntityState = import('sonolus.js-compiler/watch').EntityState
    const HorizontalAlign: Compiler['HorizontalAlign']
    type HorizontalAlign = import('sonolus.js-compiler/watch').HorizontalAlign
    const Judgment: Compiler['Judgment']
    type Judgment = import('sonolus.js-compiler/watch').Judgment

    const EffectClipId: Compiler['EffectClipId']
    type EffectClipId = import('sonolus.js-compiler/watch').EffectClipId
    const ParticleEffectId: Compiler['ParticleEffectId']
    type ParticleEffectId = import('sonolus.js-compiler/watch').ParticleEffectId
    const SkinSpriteId: Compiler['SkinSpriteId']
    type SkinSpriteId = import('sonolus.js-compiler/watch').SkinSpriteId

    const LoopedEffectClipInstanceId: Compiler['LoopedEffectClipInstanceId']
    type LoopedEffectClipInstanceId = import('sonolus.js-compiler/watch').LoopedEffectClipInstanceId
    const ParticleEffectInstanceId: Compiler['ParticleEffectInstanceId']
    type ParticleEffectInstanceId = import('sonolus.js-compiler/watch').ParticleEffectInstanceId
    const ScheduledLoopedEffectClipInstanceId: Compiler['ScheduledLoopedEffectClipInstanceId']
    type ScheduledLoopedEffectClipInstanceId =
        import('sonolus.js-compiler/watch').ScheduledLoopedEffectClipInstanceId

    const audio: Compiler['audio']
    const background: Compiler['background']
    const bpmChanges: Compiler['bpmChanges']
    type BpmChange = import('sonolus.js-compiler/watch').BpmChange
    const compiler: Compiler['compiler']
    const debug: Compiler['debug']
    const entityInfos: Compiler['entityInfos']
    type EntityInfo = import('sonolus.js-compiler/watch').EntityInfo
    const input: Compiler['input']
    type JudgmentWindow = import('sonolus.js-compiler/watch').JudgmentWindow
    type JudgmentWindows = import('sonolus.js-compiler/watch').JudgmentWindows
    const life: Compiler['life']
    type ArchetypeLife = import('sonolus.js-compiler/watch').ArchetypeLife
    type ConsecutiveLife = import('sonolus.js-compiler/watch').ConsecutiveLife
    const native: Compiler['native']
    const score: Compiler['score']
    type ConsecutiveScore = import('sonolus.js-compiler/watch').ConsecutiveScore
    const screen: Compiler['screen']
    const time: Compiler['time']
    const timeScaleChanges: Compiler['timeScaleChanges']
    type TimeScaleChange = import('sonolus.js-compiler/watch').TimeScaleChange
    const ui: Compiler['ui']
    type UI = import('sonolus.js-compiler/watch').UI
    type UIConfiguration = import('sonolus.js-compiler/watch').UIConfiguration
}
