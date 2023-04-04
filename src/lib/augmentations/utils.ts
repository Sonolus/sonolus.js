import { Intrinsic } from 'sonolus.js-compiler/dist/intrinsic/index.js'

type PassThroughKeys<T> = (keyof {
    [K in keyof T as K extends string
        ? T[K] extends (...args: never[]) => unknown
            ? K
            : never
        : never]: never
})[]

export const passThrough = <T>(target: T, keys: PassThroughKeys<T>): void => {
    for (const key of keys) {
        const func = target[key as never]
        if (typeof func !== 'function') continue

        Object.assign(func, {
            [Intrinsic.Call]: (ir, thisValue, args, ctx) =>
                ctx.JSCall(ir, {
                    func,
                    thisValue,
                    args: args.map((arg) => ctx.value(ir, arg)),
                }),
        } satisfies Intrinsic<'Call'>)
    }
}

type ImplementProps<T> = Partial<{
    [K in keyof T as K extends string
        ? T[K] extends (...args: never[]) => unknown
            ? K extends 'valueOf'
                ? never
                : K
            : never
        : never]: T[K]
}>

export const implement = <T>(target: T, props: ImplementProps<T>): void => {
    for (const [key, implementation] of Object.entries(props)) {
        const func = target[key as never]
        if (typeof func !== 'function') continue

        Object.assign(func, {
            [Intrinsic.Call]: (ir, thisValue, args, ctx) =>
                ctx.Call(ir, {
                    callee: ctx.value(ir, implementation, thisValue),
                    args: {
                        init: ctx.zero(ir),
                        value: args,
                    },
                }),
        } satisfies Intrinsic<'Call'>)
    }
}
