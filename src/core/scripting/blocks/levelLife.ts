import { Code } from '../code'
import { Execute } from '../functions/execute'
import { Node } from '../node'
import { Pointer } from '../pointer'

class ConsecutiveLife {
    private _pointer: Pointer

    public constructor(index: number) {
        this._pointer = LevelLife[index * 2]
    }

    public set(increment: Code<number>, step: Code<number>): Node<0> {
        return Execute(this.increment.set(increment), this.step.set(step))
    }

    public get increment() {
        return this._pointer.to<number>(0)
    }

    public get step() {
        return this._pointer.to<number>(1)
    }
}

export const LevelLife = new Pointer(8)

export const ConsecutivePerfectLife = new ConsecutiveLife(0)
export const ConsecutiveGreatLife = new ConsecutiveLife(1)
export const ConsecutiveGoodLife = new ConsecutiveLife(2)
