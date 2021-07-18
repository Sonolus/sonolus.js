import express, { Express } from 'express'
import { NetworkInterfaceInfo, networkInterfaces } from 'os'
import { resolve } from 'path'

import { BuildOutput } from './builder'
import { SRL } from './sonolus/srl'

export function serve(
    buildOutput: BuildOutput,
    serverConfig: {
        port?: number
        staticPath?: string
        levelCover?: SRL
        levelBgm?: SRL
    } = {}
) {
    const engineInfo = {
        name: '0',
        version: 2,
        title: 'Engine',
        subtitle: 'Unknown',
        author: 'Unknown',
        thumbnail: {},
        data: {
            type: 'EngineData',
            url: `/EngineData`,
        },
        configuration: {
            type: 'EngineConfiguration',
            url: `/EngineConfiguration`,
        },
        skin: {},
        background: {},
        effect: {},
        particle: {},
    }

    const levelInfo = {
        name: '0',
        version: 1,
        rating: 0,
        engine: engineInfo,
        useSkin: { useDefault: true },
        useBackground: { useDefault: true },
        useEffect: { useDefault: true },
        useParticle: { useDefault: true },
        title: 'Level',
        artists: 'Unknown',
        author: 'Unknown',
        cover: serverConfig.levelCover || { type: '' },
        bgm: serverConfig.levelBgm || { type: 'LevelBgm', url: '/LevelBgm' },
        data: {
            type: 'LevelData',
            url: `/LevelData`,
        },
    }

    const app = express()

    app.use((req, res, next) => {
        res.set('Sonolus-Version', '0.5.3')
        next()
    })

    app.get('/info', (req, res) => {
        res.json({
            levels: [levelInfo],
            skins: [],
            backgrounds: [],
            effects: [],
            particles: [],
            engines: [],
        })
    })

    app.get('/levels/0', (req, res) => {
        res.json({
            item: levelInfo,
            description: '',
            recommended: [],
        })
    })

    app.get('/LevelBgm', (req, res) => {
        res.sendFile(resolve(__dirname, '../res/silence.mp3'))
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

    if (serverConfig.staticPath) {
        app.use('/static', express.static(serverConfig.staticPath))
    }

    app.use((req, res) => {
        res.status(404).end()
    })

    tryListen(app, serverConfig.port || 8080, () => {
        console.log(
            buildOutput.engine.configuration.hash,
            'EngineConfiguration'
        )
        console.log(buildOutput.engine.data.hash, 'EngineData')
        console.log(buildOutput.level.data.hash, 'LevelData')
    })
}

function tryListen(app: Express, port: number, callback: () => void) {
    app.listen(port, () => {
        console.log('Server available at:')
        console.log(
            (Object.values(
                networkInterfaces()
            ).flat() as NetworkInterfaceInfo[])
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
