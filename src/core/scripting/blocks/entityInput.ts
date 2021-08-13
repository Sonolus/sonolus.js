import { Pointer } from '../pointer'

export const EntityInput = new Pointer(23)

export const InputJudgment = EntityInput.to<number>(0)
export const InputAccuracy = EntityInput.to<number>(1)
export const InputBucket = EntityInput.to<number>(2)
export const InputBucketValue = EntityInput.to<number>(3)
