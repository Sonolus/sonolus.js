import { Pointer } from '../pointer'

export const TemporaryTouchData = new Pointer(101)

export const TouchId = TemporaryTouchData.to<number>(0)
export const TouchStarted = TemporaryTouchData.to<boolean>(1)
export const TouchEnded = TemporaryTouchData.to<boolean>(2)
export const TouchT = TemporaryTouchData.to<number>(3)
export const TouchST = TemporaryTouchData.to<number>(4)
export const TouchX = TemporaryTouchData.to<number>(5)
export const TouchY = TemporaryTouchData.to<number>(6)
export const TouchSX = TemporaryTouchData.to<number>(7)
export const TouchSY = TemporaryTouchData.to<number>(8)
export const TouchDX = TemporaryTouchData.to<number>(9)
export const TouchDY = TemporaryTouchData.to<number>(10)
export const TouchVX = TemporaryTouchData.to<number>(11)
export const TouchVY = TemporaryTouchData.to<number>(12)
export const TouchVR = TemporaryTouchData.to<number>(13)
export const TouchVW = TemporaryTouchData.to<number>(14)
