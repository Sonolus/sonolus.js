import { lstatSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

export const importDefault = async <T>(path: string): Promise<T> =>
    ((await import(pathToFileURL(path).toString())) as { default: T }).default

export const getConfigPath = (path: string): string =>
    findPath(path, 'sonolus-cli.config', ['.js', '.cjs', '.mjs'])

export const getEntryPath = (path: string): string =>
    findPath(path, 'index', ['.js', '.cjs', '.mjs', '.ts', '.cts', '.mts'])

const findPath = (path: string, filename: string, extensions: string[]) => {
    const paths = [path, ...extensions.map((extension) => join(path, `${filename}${extension}`))]

    for (const path of paths) {
        if (isFile(path)) return path
    }

    throw new Error(`Not found: ${path} or any of ${join(path, filename)}[${extensions.join('/')}]`)
}

const isFile = (path: string) => {
    try {
        return lstatSync(path).isFile()
    } catch {
        return false
    }
}
