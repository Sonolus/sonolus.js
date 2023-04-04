import { Intrinsic } from 'sonolus.js-compiler/dist/intrinsic/index.js'
import {
    iterableEvery,
    iterableFindIndex,
    iterableForEach,
    iterableReduce,
    iterableSome,
} from './iterable.js'
import { implement, passThrough } from './utils.js'

passThrough(Array, ['from', 'isArray', 'of'])

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

declare global {
    interface ArrayConstructor {
        range(length: number): number[]
    }
}

const range: Intrinsic<'Call'> = {
    [Intrinsic.Call]: (ir, _, [length], ctx) =>
        ctx.JSCall(ir, {
            func: (length: number) => [...Array(length).keys()],
            thisValue: undefined,
            args: [ctx.value(ir, length)],
        }),
}

Array.range = range as never
