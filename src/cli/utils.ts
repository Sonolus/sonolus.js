import { pathToFileURL } from 'url'

export const importDefault = async <T>(path: string): Promise<T> =>
    ((await import(pathToFileURL(path).toString())) as { default: T }).default
