import { Pointer } from '../pointer'
import { createArrayBlockWithSelf } from './arrayBlock'

export enum State {
    Waiting = 0,
    Spawned = 1,
    Despawned = 2,
}

export class EntityInfoPointer extends Pointer {
    public get index(): Pointer<number> {
        return this.to<number>(0)
    }

    public get archetype(): Pointer<number> {
        return this.to<number>(1)
    }

    public get state(): Pointer<State> {
        return this.to<State>(2)
    }
}

export const EntityInfo = createArrayBlockWithSelf(EntityInfoPointer, 20, 10, 3)
