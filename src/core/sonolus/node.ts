export type SNode = (SFuncNode | SValueNode) & { marker?: string }

export type SFuncNode = {
    func: string
    args: number[]
}

export type SValueNode = {
    value: number
}
