import {
    iterableEvery,
    iterableFindIndex,
    iterableForEach,
    iterableReduce,
    iterableSome,
} from './iterable.js'
import { implement, passThrough } from './utils.js'

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
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
    every: iterableEvery as never,
    findIndex: iterableFindIndex,
    forEach: iterableForEach,
    reduce: iterableReduce,
    some: iterableSome,
})
