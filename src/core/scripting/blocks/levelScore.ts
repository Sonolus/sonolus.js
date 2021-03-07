import { Code } from '../code'
import { Execute } from '../functions/execute'
import { Node } from '../node'
import { Pointer } from '../pointer'

class ConsecutiveScore {
    private _pointer: Pointer

    public constructor(index: number) {
        this._pointer = LevelScore[3 + index * 3]
    }

    public set(
        multiplier: Code<number>,
        step: Code<number>,
        cap: Code<number>
    ): Node<0> {
        return Execute(
            this.multiplier.set(multiplier),
            this.step.set(step),
            this.cap.set(cap)
        )
    }

    public get multiplier() {
        return this._pointer.to<number>(0)
    }

    public get step() {
        return this._pointer.to<number>(1)
    }

    public get cap() {
        return this._pointer.to<number>(2)
    }
}

export const LevelScore = new Pointer(7)

export const PerfectMultiplier = LevelScore.to<number>(0)
export const GreatMultiplier = LevelScore.to<number>(1)
export const GoodMultiplier = LevelScore.to<number>(2)

export const ConsecutivePerfectScore = new ConsecutiveScore(0)
export const ConsecutiveGreatScore = new ConsecutiveScore(1)
export const ConsecutiveGoodScore = new ConsecutiveScore(2)
