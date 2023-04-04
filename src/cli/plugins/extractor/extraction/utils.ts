import fs from 'fs-extra'
import path from 'node:path'
import { decompress } from 'sonolus-core'

export const readJsonResource = async <T>(paths: string[]): Promise<T> =>
    await decompress(await fs.readFile(path.join(...paths)))

export const empty = (paths: string[]): Promise<void> => fs.emptyDir(path.join(...paths))

export const writeJson = (data: unknown, paths: string[]): Promise<void> =>
    fs.outputJson(path.join(...paths), data, { spaces: 4 })

export const writeJs = (data: string, paths: string[]): Promise<void> =>
    fs.outputFile(path.join(...paths), data)
