import { Pointer, PointerConstructor } from '../pointer'
import { createArrayBlock } from './arrayBlock'

export function createEntityData<T extends Pointer>(
    ctor: PointerConstructor<T>
) {
    return createArrayBlock(ctor, 22, 11, 32)
}
