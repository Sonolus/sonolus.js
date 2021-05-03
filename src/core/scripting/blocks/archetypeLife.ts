import { Pointer } from '../pointer'
import { createArrayBlock } from './arrayBlock'

export class ArchetypeLifePointer extends Pointer {
    public get perfectLifeIncrement() {
        return this.to<number>(0)
    }

    public get greatLifeIncrement() {
        return this.to<number>(1)
    }

    public get goodLifeIncrement() {
        return this.to<number>(2)
    }

    public get missLifeIncrement() {
        return this.to<number>(3)
    }
}

export const ArchetypeLife = createArrayBlock(ArchetypeLifePointer, 30, 4)
