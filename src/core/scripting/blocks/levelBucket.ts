import { Code } from '../code'
import { Execute } from '../functions/execute'
import { Multiply } from '../functions/multiply'
import { Node } from '../node'
import { Pointer } from '../pointer'
import { createArrayBlock } from './arrayBlock'

export class LevelBucketPointer extends Pointer {
    public setBucket(
        maxPerfect: Code<number>,
        maxGreat: Code<number>,
        maxGood: Code<number>
    ): Node<0>
    public setBucket(
        minPerfect: Code<number>,
        maxPerfect: Code<number>,
        minGreat: Code<number>,
        maxGreat: Code<number>,
        minGood: Code<number>,
        maxGood: Code<number>
    ): Node<0>
    public setBucket(
        arg1: Code<number>,
        arg2: Code<number>,
        arg3: Code<number>,
        arg4?: Code<number>,
        arg5?: Code<number>,
        arg6?: Code<number>
    ): Node<0> {
        if (arg4 !== undefined && arg5 !== undefined && arg6 !== undefined) {
            return Execute(
                this.minPerfect.set(arg1),
                this.maxPerfect.set(arg2),
                this.minGreat.set(arg3),
                this.maxGreat.set(arg4),
                this.minGood.set(arg5),
                this.maxGood.set(arg6)
            )
        } else {
            return Execute(
                this.minPerfect.set(Multiply(arg1, -1)),
                this.maxPerfect.set(arg1),
                this.minGreat.set(Multiply(arg2, -1)),
                this.maxGreat.set(arg2),
                this.minGood.set(Multiply(arg3, -1)),
                this.maxGood.set(arg3)
            )
        }
    }

    public get minPerfect() {
        return this.to<number>(0)
    }

    public get maxPerfect() {
        return this.to<number>(1)
    }

    public get minGreat() {
        return this.to<number>(2)
    }

    public get maxGreat() {
        return this.to<number>(3)
    }

    public get minGood() {
        return this.to<number>(4)
    }

    public get maxGood() {
        return this.to<number>(5)
    }
}

export const LevelBucket = createArrayBlock(LevelBucketPointer, 6, 6)
