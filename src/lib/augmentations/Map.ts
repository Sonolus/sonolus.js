import { iterableForEach } from './iterable.js'
import { implement, passThrough } from './utils.js'

passThrough(Map.prototype, ['entries', 'get', 'has', 'keys', 'values'])

implement(Map.prototype, {
    forEach: iterableForEach,
})
