import { SArchetype } from '../../sonolus/engine/archetype'
import { SBucket } from '../../sonolus/engine/bucket'
import {
    SOption,
    SSliderOption,
    SToggleOption,
} from '../../sonolus/engine/option'
import { SScript } from '../../sonolus/engine/script'
import { LevelOption } from '../blocks/levelOption'
import { Pointer } from '../pointer'

type WithIndex<T> = T[keyof T][] &
    { [key in keyof T & string as `${key}Index`]: number }

type WithPointers<T extends { [key: string]: SOption }> = SOption[] &
    {
        [key in keyof T as T[key] extends SSliderOption
            ? key
            : never]: Pointer<number>
    } &
    {
        [key in keyof T as T[key] extends SToggleOption
            ? key
            : never]: Pointer<boolean>
    }

export function defineOptions<T extends { [key: string]: SOption }>(
    keyedOptions: T
): WithPointers<T> {
    const output = Object.values(keyedOptions)
    Object.keys(keyedOptions).forEach((key, index) =>
        Object.assign(output, {
            [key]:
                keyedOptions[key].type === 'slider'
                    ? LevelOption.to<number>(index)
                    : LevelOption.to<boolean>(index),
        })
    )
    return output as WithPointers<T>
}

export function defineBuckets<T extends { [key: string]: SBucket }>(
    keyedBuckets: T
): WithIndex<T> {
    return toArrayWithIndex(keyedBuckets)
}

export function defineArchetypes<T extends { [key: string]: SArchetype }>(
    keyedArchetypes: T
): WithIndex<T> {
    return toArrayWithIndex(keyedArchetypes)
}

export function defineScripts<
    T extends { [key: string]: SScript | (() => SScript) }
>(keyedScripts: T): WithIndex<T> {
    return toArrayWithIndex(keyedScripts)
}

function toArrayWithIndex<T>(input: T) {
    const output = Object.values(input)
    Object.keys(input).forEach((key, index) =>
        Object.assign(output, { [`${key}Index`]: index })
    )
    return output as WithIndex<T>
}
