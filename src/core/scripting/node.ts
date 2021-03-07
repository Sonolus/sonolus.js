import { DataType } from './dataType'

export type Node<T extends DataType = DataType> = (FuncNode | ValueNode<T>) & {
    marker?: string
    index?: number
}

export class FuncNode {
    public func: string
    public args: Node[]

    public constructor(func: string, args: Node[]) {
        this.func = func
        this.args = args
    }
}

export class ValueNode<T extends DataType = DataType> {
    public value: T

    public constructor(value: T) {
        this.value = value
    }
}
