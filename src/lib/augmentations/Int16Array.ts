import {
    iterableEvery,
    iterableFindIndex,
    iterableForEach,
    iterableReduce,
    iterableSome,
} from './iterable.js'
import { implement, passThrough } from './utils.js'

passThrough(Int16Array, ['from', 'of'])

passThrough(Int16Array.prototype, [
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

implement(Int16Array.prototype, {
    every: iterableEvery,
    findIndex: iterableFindIndex,
    forEach: iterableForEach,
    reduce: iterableReduce,
    some: iterableSome,
})
