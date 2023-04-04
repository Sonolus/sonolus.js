import {
    iterableEvery,
    iterableFindIndex,
    iterableForEach,
    iterableReduce,
    iterableSome,
} from './iterable.js'
import { implement, passThrough } from './utils.js'

passThrough(Float32Array, ['from', 'of'])

passThrough(Float32Array.prototype, [
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

implement(Float32Array.prototype, {
    every: iterableEvery,
    findIndex: iterableFindIndex,
    forEach: iterableForEach,
    reduce: iterableReduce,
    some: iterableSome,
})
