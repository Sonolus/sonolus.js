export type SOption = SSliderOption | SToggleOption

type SSliderOption = {
    name: string
    standard: boolean
    scope: string
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    display: 'number' | 'percentage'
}

type SToggleOption = {
    name: string
    standard: boolean
    scope: string
    type: 'toggle'
    def: number
}
