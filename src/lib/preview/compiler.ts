// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import * as compiler from '@sonolus/sonolus.js-compiler/preview'

Object.assign(globalThis, compiler)

type Compiler = typeof compiler

declare global {
    const Archetype: Compiler['Archetype']
    type Archetype = import('@sonolus/sonolus.js-compiler/preview').Archetype

    const previewData: Compiler['previewData']

    const Collection: Compiler['Collection']
    type Collection<T> = import('@sonolus/sonolus.js-compiler/preview').Collection<T>
    const Container: Compiler['Container']
    const ContainerType: Compiler['ContainerType']
    type ContainerType<T> = import('@sonolus/sonolus.js-compiler/preview').ContainerType<T>
    const DataType: Compiler['DataType']
    type DataType<T extends number | boolean> =
        import('@sonolus/sonolus.js-compiler/preview').DataType<T>
    const Dictionary: Compiler['Dictionary']
    type Dictionary<K, V> = import('@sonolus/sonolus.js-compiler/preview').Dictionary<K, V>
    const Mat: Compiler['Mat']
    type Mat = import('@sonolus/sonolus.js-compiler/preview').Mat
    type MatLike = import('@sonolus/sonolus.js-compiler/preview').MatLike
    const Quad: Compiler['Quad']
    type Quad = import('@sonolus/sonolus.js-compiler/preview').Quad
    type QuadLike = import('@sonolus/sonolus.js-compiler/preview').QuadLike
    const Rect: Compiler['Rect']
    type Rect = import('@sonolus/sonolus.js-compiler/preview').Rect
    type RectLike = import('@sonolus/sonolus.js-compiler/preview').RectLike
    const Tuple: Compiler['Tuple']
    type Tuple<T> = import('@sonolus/sonolus.js-compiler/preview').Tuple<T>
    const Vec: Compiler['Vec']
    type Vec = import('@sonolus/sonolus.js-compiler/preview').Vec
    type VecLike = import('@sonolus/sonolus.js-compiler/preview').VecLike

    const defineArchetypes: Compiler['defineArchetypes']
    const defineOptions: Compiler['defineOptions']
    const defineSkin: Compiler['defineSkin']
    type SkinSprite = import('@sonolus/sonolus.js-compiler/preview').SkinSprite

    const Callback: Compiler['Callback']
    type Callback = import('@sonolus/sonolus.js-compiler/preview').Callback
    const HorizontalAlign: Compiler['HorizontalAlign']
    type HorizontalAlign = import('@sonolus/sonolus.js-compiler/preview').HorizontalAlign
    const PrintColor: Compiler['PrintColor']
    type PrintColor = import('@sonolus/sonolus.js-compiler/preview').PrintColor
    const PrintFormat: Compiler['PrintFormat']
    type PrintFormat = import('@sonolus/sonolus.js-compiler/preview').PrintFormat
    const Scroll: Compiler['Scroll']
    type Scroll = import('@sonolus/sonolus.js-compiler/preview').Scroll

    const SkinSpriteId: Compiler['SkinSpriteId']
    type SkinSpriteId = import('@sonolus/sonolus.js-compiler/preview').SkinSpriteId

    const bpmChanges: Compiler['bpmChanges']
    type BpmChange = import('@sonolus/sonolus.js-compiler/preview').BpmChange
    const canvas: Compiler['canvas']
    const compiler: Compiler['compiler']
    const debug: Compiler['debug']
    const entityInfos: Compiler['entityInfos']
    type EntityInfo = import('@sonolus/sonolus.js-compiler/preview').EntityInfo
    const native: Compiler['native']
    const screen: Compiler['screen']
    const timeScaleChanges: Compiler['timeScaleChanges']
    type TimeScaleChange = import('@sonolus/sonolus.js-compiler/preview').TimeScaleChange
    const ui: Compiler['ui']
    type UI = import('@sonolus/sonolus.js-compiler/preview').UI
    type UIConfiguration = import('@sonolus/sonolus.js-compiler/preview').UIConfiguration
}
