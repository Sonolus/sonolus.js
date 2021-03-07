import { Code } from '../code'
import { Execute } from '../functions/execute'
import { Node } from '../node'
import { Pointer } from '../pointer'

export enum HorizontalAlign {
    Left = -1,
    Center = 0,
    Right = 1,
}

export enum VerticalAlign {
    Bottom = -1,
    Middle = 0,
    Top = 1,
}

class UI {
    private _pointer: Pointer

    public constructor(index: number) {
        this._pointer = LevelUI[index * 11]
    }

    public set(
        anchorX: Code<number>,
        anchorY: Code<number>,
        pivotX: Code<number>,
        pivotY: Code<number>,
        width: Code<number>,
        height: Code<number>,
        rotation: Code<number>,
        alpha: Code<number>,
        horizontalAlign: Code<HorizontalAlign>,
        verticalAlign: Code<VerticalAlign>,
        background: Code<boolean>
    ): Node<0> {
        return Execute(
            this.anchorX.set(anchorX),
            this.anchorY.set(anchorY),
            this.pivotX.set(pivotX),
            this.pivotY.set(pivotY),
            this.width.set(width),
            this.height.set(height),
            this.rotation.set(rotation),
            this.alpha.set(alpha),
            this.horizontalAlign.set(horizontalAlign),
            this.verticalAlign.set(verticalAlign),
            this.background.set(background)
        )
    }

    public get anchorX() {
        return this._pointer.to<number>(0)
    }

    public get anchorY() {
        return this._pointer.to<number>(1)
    }

    public get pivotX() {
        return this._pointer.to<number>(2)
    }

    public get pivotY() {
        return this._pointer.to<number>(3)
    }

    public get width() {
        return this._pointer.to<number>(4)
    }

    public get height() {
        return this._pointer.to<number>(5)
    }

    public get rotation() {
        return this._pointer.to<number>(6)
    }

    public get alpha() {
        return this._pointer.to<number>(7)
    }

    public get horizontalAlign() {
        return this._pointer.to<HorizontalAlign>(8)
    }

    public get verticalAlign() {
        return this._pointer.to<VerticalAlign>(9)
    }

    public get background() {
        return this._pointer.to<boolean>(10)
    }
}

export const LevelUI = new Pointer(5)

export const UIMenu = new UI(0)
export const UIJudgment = new UI(1)
export const UIComboValue = new UI(2)
export const UIComboText = new UI(3)
export const UIScoreBar = new UI(4)
export const UIScoreValue = new UI(5)
export const UILifeBar = new UI(6)
export const UILifeValue = new UI(7)
