import { Pointer, PointerConstructor } from '../pointer'
import { createArrayBlockWithSelf } from './arrayBlock'

export function createEntitySharedMemory<T extends Pointer>(
    ctor: PointerConstructor<T>
) {
    return createArrayBlockWithSelf(ctor, 24, 12, 32)
}
