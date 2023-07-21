import { EngineTutorialData } from 'sonolus-core'
import { TutorialCallback } from 'sonolus.js-compiler/tutorial'
import { createNodePrinter } from '../../../../shared/printer.js'
import { remove, writeJs } from '../../../../shared/utils.js'

export const extractEngineTutorialDataCallbacks = async (
    tutorialData: EngineTutorialData,
    dev: string,
): Promise<void> => {
    const print = createNodePrinter(tutorialData.nodes)

    await Promise.all(
        Object.values(TutorialCallback).map((name) =>
            remove([dev, 'engine', 'tutorialData', `${name}.js`]),
        ),
    )

    await Promise.all(
        Object.values(TutorialCallback)
            .map((name) => [name, tutorialData[name]])
            .filter((kvp): kvp is [TutorialCallback, number] => typeof kvp[1] === 'number')
            .map(([name, index]) => extract(name, index, print, dev)),
    )
}

const extract = async (
    name: TutorialCallback,
    index: number,
    print: (index: number) => string[],
    dev: string,
) => {
    const js = [`// Tutorial.${name}()`, '', ...print(index), ''].join('\n')

    await writeJs(js, [dev, 'engine', 'tutorialData', `${name}.js`])
}
