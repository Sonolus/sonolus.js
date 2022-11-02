import { EngineConfigurationOption, EngineDataBucket } from 'sonolus-core'
import { Archetype } from '..'
import { LevelOption } from '../blocks/levelOption'
import { Pointer } from '../pointer'
import { Script } from '../script'

type WithIndex<T> = T[keyof T][] & {
    [key in keyof T & string as `${key}Index`]: number
}

type WithPointers<T extends Record<string, EngineConfigurationOption>> =
    EngineConfigurationOption[] & {
        [key in keyof T]: {
            toggle: Pointer<boolean>
            slider: Pointer<number>
            select: Pointer<number>
        }[T[key]['type']]
    }

export function defineOptions<
    T extends Record<string, EngineConfigurationOption>
>(keyedOptions: T): WithPointers<T> {
    const output = Object.values(keyedOptions)
    Object.keys(keyedOptions).forEach((key, index) =>
        Object.assign(output, {
            [key]: LevelOption.to(index),
        })
    )
    return output as WithPointers<T>
}

export function defineBuckets<T extends Record<string, EngineDataBucket>>(
    keyedBuckets: T
): WithIndex<T> {
    return toArrayWithIndex(keyedBuckets)
}

export function defineArchetypes<T extends Record<string, Archetype>>(
    keyedArchetypes: T
): WithIndex<T> {
    return toArrayWithIndex(keyedArchetypes)
}

export function defineScripts<
    T extends Record<string, Script | (() => Script)>
>(keyedScripts: T): WithIndex<T> {
    return toArrayWithIndex(keyedScripts)
}

function toArrayWithIndex<T extends Record<string, unknown>>(input: T) {
    const output = Object.values(input)
    Object.keys(input).forEach((key, index) =>
        Object.assign(output, { [`${key}Index`]: index })
    )
    return output as WithIndex<T>
}
