import {
    EnginePreviewData,
    EnginePreviewDataArchetype,
    EnginePreviewDataArchetypeCallback,
} from 'sonolus-core'
import { Callback } from 'sonolus.js-compiler/preview'
import { createNodePrinter } from '../../../../../shared/printer.js'
import { writeJs } from '../../../../../shared/utils.js'

export const extractEnginePreviewDataArchetypeCallbacks = async (
    archetype: EnginePreviewDataArchetype,
    previewData: EnginePreviewData,
    dev: string,
): Promise<void> => {
    const print = createNodePrinter(previewData.nodes)

    await Promise.all(
        Object.values(Callback)
            .map((name) => [name, archetype[name]])
            .filter((kvp): kvp is [Callback, EnginePreviewDataArchetypeCallback] => !!kvp[1])
            .map(([name, callback]) => extract(name, callback, archetype, print, dev)),
    )
}

const extract = async (
    name: Callback,
    callback: EnginePreviewDataArchetypeCallback,
    archetype: EnginePreviewDataArchetype,
    print: (index: number) => string[],
    dev: string,
) => {
    const js = [
        `// ${archetype.name}.${name}()`,
        `// order = ${callback.order ?? 0}`,
        '',
        ...print(callback.index),
        '',
    ].join('\n')

    await writeJs(js, [
        dev,
        'engine',
        'previewData',
        'archetypes',
        `${archetype.name}`,
        `${name}.js`,
    ])
}
