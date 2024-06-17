import { Sonolus } from '@sonolus/express'
import { packPath } from '@sonolus/free-pack'
import express, { Express } from 'express'
import { NetworkInterfaceInfo, networkInterfaces } from 'node:os'
import { resolve } from 'node:path'
import { res } from '../../../res/index.js'
import { FullSonolusCLIConfig } from '../../config.js'

export const serve = async (config: FullSonolusCLIConfig): Promise<void> => {
    const sonolus = new Sonolus({})
    sonolus.load(packPath)

    sonolus.title = { en: 'Dev Server' }

    sonolus.engine.items.push({
        name: 'dev',
        version: 12,
        title: { en: 'Dev Engine' },
        subtitle: { en: 'Unknown' },
        author: { en: 'Unknown' },
        tags: [],
        description: {},
        thumbnail: empty,
        playData: root('EnginePlayData'),
        watchData: root('EngineWatchData'),
        previewData: root('EnginePreviewData'),
        tutorialData: root('EngineTutorialData'),
        configuration: root('EngineConfiguration'),
        skin: 'pixel',
        background: 'darkblue',
        effect: '8bit',
        particle: 'pixel',
    })

    sonolus.level.items.push({
        name: 'dev',
        version: 1,
        rating: 0,
        engine: 'dev',
        useSkin: { useDefault: true },
        useBackground: { useDefault: true },
        useEffect: { useDefault: true },
        useParticle: { useDefault: true },
        title: { en: 'Dev Level' },
        artists: { en: 'Unknown' },
        author: { en: 'Unknown' },
        tags: [],
        description: {},
        cover: empty,
        bgm: sonolus.add(res('silence.mp3')),
        data: root('LevelData'),
    })

    await config.devServer(sonolus)

    const app = express()
    app.use(express.static(resolve(config.dev)))
    app.use(sonolus.router)

    return new Promise((resolve) => tryListen(app, config.port, config.host, resolve))
}

const empty = {
    hash: '',
    url: '',
}

const root = (type: string) => ({
    hash: '',
    url: `/${type}`,
})

const tryListen = (app: Express, port: number, host: string, callback: () => void) => {
    app.listen(port, host, () => {
        console.log('Server available at:')
        console.log(`http://${host}:${port}`)
        if (host === '0.0.0.0') {
            console.log(
                Object.values(networkInterfaces())
                    .flat()
                    .filter((info): info is NetworkInterfaceInfo => !!info)
                    .filter(({ family }) => family === 'IPv4')
                    .map(({ address }) => `http://${address}:${port}`)
                    .join('\n'),
            )
        }

        console.log()
        console.log(
            'Please turn on cache revalidation in your Sonolus app (Settings -> Cache -> Always Revalidate)',
        )

        callback()
    }).on('error', () => {
        tryListen(app, port + 1, host, callback)
    })
}
