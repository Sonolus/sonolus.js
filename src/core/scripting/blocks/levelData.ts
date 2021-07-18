import { Pointer } from '../pointer'

export const LevelData = new Pointer(1)

export const Time = LevelData.to<number>(0)
export const DeltaTime = LevelData.to<number>(1)
export const ScreenAspectRatio = LevelData.to<number>(2)
export const AudioOffset = LevelData.to<number>(3)
export const InputOffset = LevelData.to<number>(4)
export const RenderScale = LevelData.to<number>(5)
export const AntiAliasing = LevelData.to<number>(6)
