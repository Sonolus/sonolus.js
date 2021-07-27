import { Pointer } from '../pointer'
import { createArrayBlock } from './arrayBlock'

export class ArchetypeLifePointer extends Pointer {
    public get perfectLifeIncrement(): Pointer<number> {
        return this.to<number>(0)
    }

    public get greatLifeIncrement(): Pointer<number> {
        return this.to<number>(1)
    }

    public get goodLifeIncrement(): Pointer<number> {
        return this.to<number>(2)
    }

    public get missLifeIncrement(): Pointer<number> {
        return this.to<number>(3)
    }
}

export const ArchetypeLife = createArrayBlock(ArchetypeLifePointer, 30, 4)
