import {
    iterableEvery,
    iterableFindIndex,
    iterableForEach,
    iterableReduce,
    iterableSome,
} from './iterable.js'
import { implement, passThrough } from './utils.js'

passThrough(BigUint64Array, ['from', 'of'])

passThrough(BigUint64Array.prototype, [
    'at',
    'entries',
    'includes',
    'indexOf',
    'join',
    'keys',
    'lastIndexOf',
    'slice',
    'subarray',
    'toLocaleString',
    'toString',
    'values',
    'valueOf',
])

implement(BigUint64Array.prototype, {
    every: iterableEvery,
    findIndex: iterableFindIndex,
    forEach: iterableForEach,
    reduce: iterableReduce,
    some: iterableSome,
})
