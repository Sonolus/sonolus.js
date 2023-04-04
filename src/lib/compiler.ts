import * as compiler from 'sonolus.js-compiler'

Object.assign(globalThis, compiler)

type Compiler = typeof compiler

declare global {
    const Archetype: Compiler['Archetype']
    type Archetype = import('sonolus.js-compiler').Archetype
    const SpawnableArchetype: Compiler['SpawnableArchetype']
    type SpawnableArchetype<T extends import('sonolus.js-compiler').SpawnDataDefinition> =
        import('sonolus.js-compiler').SpawnableArchetype<T>

    const levelData: Compiler['levelData']
    const levelMemory: Compiler['levelMemory']

    const Collection: Compiler['Collection']
    type Collection<T> = import('sonolus.js-compiler').Collection<T>
    const Container: Compiler['Container']
    const ContainerType: Compiler['ContainerType']
    type ContainerType<T> = import('sonolus.js-compiler').ContainerType<T>
    const DataType: Compiler['DataType']
    type DataType<T extends number | boolean> = import('sonolus.js-compiler').DataType<T>
    const Dictionary: Compiler['Dictionary']
    type Dictionary<K, V> = import('sonolus.js-compiler').Dictionary<K, V>
    const Mat: Compiler['Mat']
    type Mat = import('sonolus.js-compiler').Mat
    type MatLike = import('sonolus.js-compiler').MatLike
    const Quad: Compiler['Quad']
    type Quad = import('sonolus.js-compiler').Quad
    type QuadLike = import('sonolus.js-compiler').QuadLike
    const Rect: Compiler['Rect']
    type Rect = import('sonolus.js-compiler').Rect
    type RectLike = import('sonolus.js-compiler').RectLike
    const Tuple: Compiler['Tuple']
    type Tuple<T> = import('sonolus.js-compiler').Tuple<T>
    const Vec: Compiler['Vec']
    type Vec = import('sonolus.js-compiler').Vec
    type VecLike = import('sonolus.js-compiler').VecLike

    const defineArchetypes: Compiler['defineArchetypes']
    const defineBuckets: Compiler['defineBuckets']
    type Bucket = import('sonolus.js-compiler').Bucket
    const defineEffect: Compiler['defineEffect']
    type EffectClip = import('sonolus.js-compiler').EffectClip
    const defineLib: Compiler['defineLib']
    const defineOptions: Compiler['defineOptions']
    const defineParticle: Compiler['defineParticle']
    type ParticleEffect = import('sonolus.js-compiler').ParticleEffect
    const defineSkin: Compiler['defineSkin']
    type SkinSprite = import('sonolus.js-compiler').SkinSprite

    const ArchetypeCallback: Compiler['ArchetypeCallback']
    type ArchetypeCallback = import('sonolus.js-compiler').ArchetypeCallback
    const EntityState: Compiler['EntityState']
    type EntityState = import('sonolus.js-compiler').EntityState
    const HorizontalAlign: Compiler['HorizontalAlign']
    type HorizontalAlign = import('sonolus.js-compiler').HorizontalAlign
    const Judgment: Compiler['Judgment']
    type Judgment = import('sonolus.js-compiler').Judgment

    type JudgmentWindow = import('sonolus.js-compiler').JudgmentWindow
    type JudgmentWindows = import('sonolus.js-compiler').JudgmentWindows
    type EffectClipId = import('sonolus.js-compiler').EffectClipId
    type ParticleEffectId = import('sonolus.js-compiler').ParticleEffectId
    type SkinSpriteId = import('sonolus.js-compiler').SkinSpriteId
    type LoopedEffectClipInstanceId = import('sonolus.js-compiler').LoopedEffectClipInstanceId
    type ParticleEffectInstanceId = import('sonolus.js-compiler').ParticleEffectInstanceId
    type ScheduledLoopedEffectClipInstanceId =
        import('sonolus.js-compiler').ScheduledLoopedEffectClipInstanceId

    const audio: Compiler['audio']
    const background: Compiler['background']
    const bpmChanges: Compiler['bpmChanges']
    type BpmChange = import('sonolus.js-compiler').BpmChange
    const compiler: Compiler['compiler']
    const debug: Compiler['debug']
    const entityInfos: Compiler['entityInfos']
    type EntityInfo = import('sonolus.js-compiler').EntityInfo
    const input: Compiler['input']
    const life: Compiler['life']
    type ArchetypeLife = import('sonolus.js-compiler').ArchetypeLife
    type ConsecutiveLife = import('sonolus.js-compiler').ConsecutiveLife
    const native: Compiler['native']
    const score: Compiler['score']
    type ConsecutiveScore = import('sonolus.js-compiler').ConsecutiveScore
    const screen: Compiler['screen']
    const time: Compiler['time']
    const timeScaleChanges: Compiler['timeScaleChanges']
    type TimeScaleChange = import('sonolus.js-compiler').TimeScaleChange
    const touches: Compiler['touches']
    type Touch = import('sonolus.js-compiler').Touch
    const ui: Compiler['ui']
    type UI = import('sonolus.js-compiler').UI
    type UIConfiguration = import('sonolus.js-compiler').UIConfiguration
}
