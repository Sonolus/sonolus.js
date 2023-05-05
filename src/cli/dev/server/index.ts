import express, { Express } from 'express'
import { NetworkInterfaceInfo, networkInterfaces } from 'node:os'
import path from 'node:path'
import { ResourceType } from 'sonolus-core'
import { Sonolus } from 'sonolus-express'
import { res } from '../../../res/index.js'
import { FullSonolusCLIConfig } from '../../config.js'

export const serve = async (config: FullSonolusCLIConfig): Promise<void> => {
    const app = express()
    app.use(express.static(path.resolve(config.dev)))

    const sonolus = new Sonolus(app)

    sonolus.db.skins.push({
        name: 'dev',
        version: 3,
        title: { en: 'Dev Skin' },
        subtitle: { en: 'Unknown' },
        author: { en: 'Unknown' },
        description: {},
        thumbnail: empty('SkinThumbnail'),
        data: empty('SkinData'),
        texture: empty('SkinTexture'),
    })

    sonolus.db.backgrounds.push({
        name: 'dev',
        version: 2,
        title: { en: 'Dev Background' },
        subtitle: { en: 'Unknown' },
        author: { en: 'Unknown' },
        description: {},
        thumbnail: empty('BackgroundThumbnail'),
        data: empty('BackgroundData'),
        image: empty('BackgroundImage'),
        configuration: empty('BackgroundConfiguration'),
    })

    sonolus.db.effects.push({
        name: 'dev',
        version: 5,
        title: { en: 'Dev Effect' },
        subtitle: { en: 'Unknown' },
        author: { en: 'Unknown' },
        description: {},
        thumbnail: empty('EffectThumbnail'),
        data: empty('EffectData'),
        audio: empty('EffectAudio'),
    })

    sonolus.db.particles.push({
        name: 'dev',
        version: 2,
        title: { en: 'Dev Particle' },
        subtitle: { en: 'Unknown' },
        author: { en: 'Unknown' },
        description: {},
        thumbnail: empty('ParticleThumbnail'),
        data: empty('ParticleData'),
        texture: empty('ParticleTexture'),
    })

    sonolus.db.engines.push({
        name: 'dev',
        version: 8,
        title: { en: 'Dev Engine' },
        subtitle: { en: 'Unknown' },
        author: { en: 'Unknown' },
        description: {},
        thumbnail: empty('EngineThumbnail'),
        data: root('EngineData'),
        configuration: root('EngineConfiguration'),
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
        cover: empty('LevelCover'),
        bgm: sonolus.add('LevelBgm', res('silence.mp3')),
        data: root('LevelData'),
    })

    await config.devServer(sonolus)

    return new Promise((resolve) => tryListen(app, 8080, resolve))
}

const empty = <T extends ResourceType>(type: T) => ({
    type,
    hash: '',
    url: '',
})

const root = <T extends ResourceType>(type: T) => ({
    type,
    hash: '',
    url: `/${type}`,
})

const tryListen = (app: Express, port: number, callback: () => void) => {
    app.listen(port, () => {
        console.log('Server available at:')
        console.log(
            Object.values(networkInterfaces())
                .flat()
                .filter((info): info is NetworkInterfaceInfo => !!info)
                .filter(({ family }) => family === 'IPv4')
                .map(({ address }) => `http://${address}:${port}`)
                .join('\n'),
        )
        console.log()
        console.log(
            'Please turn on cache revalidation in your Sonolus app (Settings -> Cache -> Always Revalidate)',
        )
        console.log(
            'Resources such as skins are not provided, please select from an external server',
        )

        callback()
    }).on('error', () => {
        tryListen(app, port + 1, callback)
    })
}
