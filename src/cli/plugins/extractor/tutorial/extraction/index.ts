import { extractEngine } from './engine/index.js'

export const extract = async (dev: string): Promise<void> => {
    await extractEngine(dev)
}
