import { Code } from '../code'
import { Multiply } from '../functions/multiply'
import { Pointer } from '../pointer'

export class Life {
    private _pointer: Pointer

    public constructor(index: Code<number>) {
        this._pointer = ArchetypeLife.to(Multiply(index, 4))
    }

    public get perfectLifeIncrement() {
        return this._pointer.to<number>(0)
    }

    public get greatLifeIncrement() {
        return this._pointer.to<number>(1)
    }

    public get goodLifeIncrement() {
        return this._pointer.to<number>(2)
    }

    public get missLifeIncrement() {
        return this._pointer.to<number>(3)
    }
}

export const ArchetypeLife = new Pointer(30)
