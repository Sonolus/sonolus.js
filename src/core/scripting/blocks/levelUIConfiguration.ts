import { Pointer } from '../pointer'

class UIConfiguration {
    private _pointer: Pointer

    public constructor(index: number) {
        this._pointer = LevelUIConfiguration[index * 2]
    }

    public get scale() {
        return this._pointer.to<number>(0)
    }

    public get alpha() {
        return this._pointer.to<number>(1)
    }
}

export const LevelUIConfiguration = new Pointer(9)

export const UIMenuConfiguration = new UIConfiguration(0)
export const UIJudgmentConfiguration = new UIConfiguration(1)
export const UIComboConfiguration = new UIConfiguration(2)
export const UIPrimaryMetricConfiguration = new UIConfiguration(3)
export const UISecondaryMetricConfiguration = new UIConfiguration(4)
