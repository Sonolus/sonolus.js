// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import * as compiler from 'sonolus.js-compiler/preview'

Object.assign(globalThis, compiler)

type Compiler = typeof compiler

declare global {
    const Archetype: Compiler['Archetype']
    type Archetype = import('sonolus.js-compiler/preview').Archetype

    const previewData: Compiler['previewData']

    const Collection: Compiler['Collection']
    type Collection<T> = import('sonolus.js-compiler/preview').Collection<T>
    const Container: Compiler['Container']
    const ContainerType: Compiler['ContainerType']
    type ContainerType<T> = import('sonolus.js-compiler/preview').ContainerType<T>
    const DataType: Compiler['DataType']
    type DataType<T extends number | boolean> = import('sonolus.js-compiler/preview').DataType<T>
    const Dictionary: Compiler['Dictionary']
    type Dictionary<K, V> = import('sonolus.js-compiler/preview').Dictionary<K, V>
    const Mat: Compiler['Mat']
    type Mat = import('sonolus.js-compiler/preview').Mat
    type MatLike = import('sonolus.js-compiler/preview').MatLike
    const Quad: Compiler['Quad']
    type Quad = import('sonolus.js-compiler/preview').Quad
    type QuadLike = import('sonolus.js-compiler/preview').QuadLike
    const Rect: Compiler['Rect']
    type Rect = import('sonolus.js-compiler/preview').Rect
    type RectLike = import('sonolus.js-compiler/preview').RectLike
    const Tuple: Compiler['Tuple']
    type Tuple<T> = import('sonolus.js-compiler/preview').Tuple<T>
    const Vec: Compiler['Vec']
    type Vec = import('sonolus.js-compiler/preview').Vec
    type VecLike = import('sonolus.js-compiler/preview').VecLike

    const defineArchetypes: Compiler['defineArchetypes']
    const defineOptions: Compiler['defineOptions']
    const defineSkin: Compiler['defineSkin']
    type SkinSprite = import('sonolus.js-compiler/preview').SkinSprite

    const ArchetypeCallback: Compiler['ArchetypeCallback']
    type ArchetypeCallback = import('sonolus.js-compiler/preview').ArchetypeCallback
    const HorizontalAlign: Compiler['HorizontalAlign']
    type HorizontalAlign = import('sonolus.js-compiler/preview').HorizontalAlign
    const PrintColor: Compiler['PrintColor']
    type PrintColor = import('sonolus.js-compiler/preview').PrintColor
    const PrintFormat: Compiler['PrintFormat']
    type PrintFormat = import('sonolus.js-compiler/preview').PrintFormat
    const Scroll: Compiler['Scroll']
    type Scroll = import('sonolus.js-compiler/preview').Scroll

    const SkinSpriteId: Compiler['SkinSpriteId']
    type SkinSpriteId = import('sonolus.js-compiler/preview').SkinSpriteId

    const bpmChanges: Compiler['bpmChanges']
    type BpmChange = import('sonolus.js-compiler/preview').BpmChange
    const canvas: Compiler['canvas']
    const compiler: Compiler['compiler']
    const debug: Compiler['debug']
    const entityInfos: Compiler['entityInfos']
    type EntityInfo = import('sonolus.js-compiler/preview').EntityInfo
    const native: Compiler['native']
    const screen: Compiler['screen']
    const timeScaleChanges: Compiler['timeScaleChanges']
    type TimeScaleChange = import('sonolus.js-compiler/preview').TimeScaleChange
    const ui: Compiler['ui']
    type UI = import('sonolus.js-compiler/preview').UI
    type UIConfiguration = import('sonolus.js-compiler/preview').UIConfiguration
}
