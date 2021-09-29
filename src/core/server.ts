import * as express from 'express'
import { Express } from 'express'
import { NetworkInterfaceInfo, networkInterfaces } from 'os'
import { resolve } from 'path'
import { Sonolus } from 'sonolus-express'
import { BuildOutput } from './builder'

export function serve(
    buildOutput: BuildOutput,
    serverConfig: {
        port?: number
    } = {}
): Sonolus {
    const app = express()

    const sonolus = new Sonolus(app)

    sonolus.load(resolve(__dirname, '../res/pack'))

    sonolus.db.engines.push({
        name: 'dev',
        version: 4,
        title: { en: 'Dev Engine' },
        subtitle: { en: 'Unknown' },
        author: { en: 'Unknown' },
        description: {},
        thumbnail: {
            type: 'EngineThumbnail',
            hash: '',
            url: '',
        },
        data: {
            type: 'EngineData',
            hash: '',
            url: '/EngineData',
        },
        configuration: {
            type: 'EngineConfiguration',
            hash: '',
            url: '/EngineConfiguration',
        },
        skin: 'dev',
        background: 'dev',
        effect: 'dev',
        particle: 'dev',
    })

    sonolus.db.levels.push({
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
        description: {},
        cover: {
            type: 'LevelCover',
            hash: '',
            url: '',
        },
        bgm: sonolus.add('LevelBgm', resolve(__dirname, '../res/silence.mp3')),
        data: {
            type: 'LevelData',
            hash: '',
            url: '/LevelData',
        },
    })

    app.get('/LevelData', (req, res) => {
        res.send(buildOutput.level.data.buffer)
    })

    app.get('/EngineData', (req, res) => {
        res.send(buildOutput.engine.data.buffer)
    })

    app.get('/EngineConfiguration', (req, res) => {
        res.send(buildOutput.engine.configuration.buffer)
    })

    tryListen(app, serverConfig.port || 8080, () => {
        console.log(
            buildOutput.engine.configuration.hash,
            'EngineConfiguration'
        )
        console.log(buildOutput.engine.data.hash, 'EngineData')
        console.log(buildOutput.level.data.hash, 'LevelData')
    })

    return sonolus
}

function tryListen(app: Express, port: number, callback: () => void) {
    app.listen(port, () => {
        console.log('Server available at:')
        console.log(
            (
                Object.values(
                    networkInterfaces()
                ).flat() as NetworkInterfaceInfo[]
            )
                .filter(({ family }) => family === 'IPv4')
                .map(({ address }) => `http://${address}:${port}`)
                .join('\n')
        )
        console.log()
        console.log(
            'Please turn on cache revalidation in your Sonolus app (Settings -> Cache -> Always Revalidate)'
        )
        console.log(
            'Resources such as skins are not provided, please select from an external server'
        )
        console.log()
        callback()
    }).on('error', () => {
        tryListen(app, port + 1, callback)
    })
}
