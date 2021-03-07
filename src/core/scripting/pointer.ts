import { Code, parse } from './code'
import { DataType } from './dataType'
import { Add } from './functions/add'
import { FuncNode, Node } from './node'

export type PointerConstructor<T extends Pointer> = new (
    block: Code<number>,
    index?: Code<number>
) => T

export class Pointer<T extends DataType = DataType> {
    [key: number]: Pointer<T>
    private _block: Node<number>
    private _index: Node<number>

    public constructor(block: Code<number>, index: Code<number> = 0) {
        this._block = parse(block)
        this._index = parse(index)

        return new Proxy(this, {
            get(target, prop) {
                if (typeof prop === 'symbol') {
                    return Reflect.get(target, prop)
                } else {
                    if (isNaN(+prop)) {
                        return Reflect.get(target, prop)
                    } else {
                        return target.to(+prop)
                    }
                }
            },
        })
    }

    public to<T extends DataType>(offset: Code<number>): Pointer<T> {
        return new Pointer<T>(this._block, Add(this._index, offset))
    }

    public get(): Node<T> {
        if (
            'func' in this._index &&
            this._index.func === 'Add' &&
            this._index.args.length === 2
        ) {
            return new FuncNode('GetShifted', [
                this._block,
                this._index.args[0],
                this._index.args[1],
            ])
        } else {
            return new FuncNode('Get', [this._block, this._index])
        }
    }

    public set(value: Code<T>): Node<0> {
        if (
            'func' in this._index &&
            this._index.func === 'Add' &&
            this._index.args.length === 2
        ) {
            return new FuncNode('SetShifted', [
                this._block,
                this._index.args[0],
                this._index.args[1],
                parse(value),
            ])
        } else {
            return new FuncNode('Set', [this._block, this._index, parse(value)])
        }
    }
}
