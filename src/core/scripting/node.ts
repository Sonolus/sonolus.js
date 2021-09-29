import { EngineDataFunctionName } from 'sonolus-core'
import { DataType } from './dataType'

export type Node<T extends DataType = DataType> = FuncNode | ValueNode<T>

export class FuncNode {
    public func: EngineDataFunctionName
    public args: Node[]

    public constructor(func: EngineDataFunctionName, args: Node[]) {
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
