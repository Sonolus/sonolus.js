import { fileURLToPath } from 'url'

export const res = (name: string): string => fileURLToPath(new URL(name, import.meta.url))
