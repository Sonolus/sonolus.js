import {
    iterableEvery,
    iterableFindIndex,
    iterableForEach,
    iterableReduce,
    iterableSome,
} from './iterable.js'
import { implement, passThrough } from './utils.js'

passThrough(Uint32Array, ['from', 'of'])

passThrough(Uint32Array.prototype, [
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

implement(Uint32Array.prototype, {
    every: iterableEvery,
    findIndex: iterableFindIndex,
    forEach: iterableForEach,
    reduce: iterableReduce,
    some: iterableSome,
})
