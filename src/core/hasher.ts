import * as crypto from 'crypto'

export function hash(data: Buffer) {
    return crypto.createHash('sha1').update(data).digest('hex')
}
