import {
    iterableEvery,
    iterableFindIndex,
    iterableForEach,
    iterableReduce,
    iterableSome,
} from './iterable.js'
import { implement, passThrough } from './utils.js'

passThrough(Uint8ClampedArray, ['from', 'of'])

passThrough(Uint8ClampedArray.prototype, [
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

implement(Uint8ClampedArray.prototype, {
    every: iterableEvery,
    findIndex: iterableFindIndex,
    forEach: iterableForEach,
    reduce: iterableReduce,
    some: iterableSome,
})
