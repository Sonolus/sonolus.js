import { createHash } from 'crypto'

export function hash(data: Buffer): string {
    return createHash('sha1').update(data).digest('hex')
}
