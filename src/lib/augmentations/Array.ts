import {
    iterableEvery,
    iterableFindIndex,
    iterableForEach,
    iterableReduce,
    iterableSome,
} from './iterable.js'
import { implement, passThrough } from './utils.js'

declare global {
    interface ArrayConstructor {
        range(length: number): number[]
    }
}

Array.range = (length: number) => [...Array(length).keys()]

passThrough(Array, ['from', 'isArray', 'of', 'range'])

passThrough(Array.prototype, [
    'at',
    'concat',
    'entries',
    'flat',
    'includes',
    'indexOf',
    'join',
    'keys',
    'lastIndexOf',
    'slice',
    'toLocaleString',
    'toString',
    'values',
])

implement(Array.prototype, {
    every: iterableEvery,
    findIndex: iterableFindIndex,
    forEach: iterableForEach,
    reduce: iterableReduce,
    some: iterableSome,
})
