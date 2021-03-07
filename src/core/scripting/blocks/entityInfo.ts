import { Pointer } from '../pointer'
import { createArrayBlock } from './arrayBlock'

export enum State {
    Waiting = 0,
    Spawned = 1,
    Despawned = 2,
}

export class EntityInfoPointer extends Pointer {
    public get index() {
        return this.to<number>(0)
    }

    public get archetype() {
        return this.to<number>(1)
    }

    public get state() {
        return this.to<State>(2)
    }
}

export const EntityInfo = createArrayBlock(EntityInfoPointer, 20, 10, 3)
