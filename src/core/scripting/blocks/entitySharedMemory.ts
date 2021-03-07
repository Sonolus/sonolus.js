import { Pointer, PointerConstructor } from '../pointer'
import { createArrayBlock } from './arrayBlock'

export function createEntitySharedMemory<T extends Pointer>(
    ctor: PointerConstructor<T>
) {
    return createArrayBlock(ctor, 24, 12, 32)
}
