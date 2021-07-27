import { Code } from '../code'
import { Multiply } from '../functions/multiply'
import { Pointer, PointerConstructor } from '../pointer'

export function createArrayBlock<T extends Pointer>(
    ctor: PointerConstructor<T>,
    id: number,
    elementSize: number
): Pointer & {
    of(index: Code<number>): T
} {
    return new Proxy(new Pointer(id), {
        get(target, prop) {
            return prop === 'of'
                ? (index: Code<number>): T =>
                      new ctor(id, Multiply(elementSize, index))
                : Reflect.get(target, prop)
        },
    }) as Pointer & {
        of(index: Code<number>): T
    }
}

export function createArrayBlockWithSelf<T extends Pointer>(
    ctor: PointerConstructor<T>,
    idSelf: number,
    idArray: number,
    elementSize: number
): T & {
    of(index: Code<number>): T
} {
    return new Proxy(new ctor(idSelf), {
        get(target, prop) {
            return prop === 'of'
                ? (index: Code<number>): T =>
                      new ctor(idArray, Multiply(elementSize, index))
                : Reflect.get(target, prop)
        },
    }) as T & {
        of(index: Code<number>): T
    }
}
