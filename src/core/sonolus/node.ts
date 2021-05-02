export type SNode = SFuncNode | SValueNode

export type SFuncNode = {
    func: string
    args: number[]
}

export type SValueNode = {
    value: number
}
