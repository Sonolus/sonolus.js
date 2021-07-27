import { Code } from '../code'
import { Pointer, PointerConstructor } from '../pointer'
import { createArrayBlockWithSelf } from './arrayBlock'

export function createEntityData<T extends Pointer>(
    ctor: PointerConstructor<T>
): T & {
    of(index: Code<number>): T
} {
    return createArrayBlockWithSelf(ctor, 22, 11, 32)
}
