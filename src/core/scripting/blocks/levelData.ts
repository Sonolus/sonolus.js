import { Pointer } from '../pointer'

export const LevelData = new Pointer(1)

export const Time = LevelData.to<number>(0)
export const DeltaTime = LevelData.to<number>(1)
export const ScreenAspectRatio = LevelData.to<number>(2)
export const DeviceAudioOffset = LevelData.to<number>(3)
export const DeviceInputOffset = LevelData.to<number>(4)
export const RenderScale = LevelData.to<number>(5)
