import { iterableForEach } from './iterable.js'
import { implement, passThrough } from './utils.js'

passThrough(Set.prototype, ['entries', 'has', 'keys', 'values'])

implement(Set.prototype, {
    forEach: iterableForEach,
})
