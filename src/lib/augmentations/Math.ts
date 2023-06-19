import { implement, passThrough } from './utils.js'

type Direction = 'In' | 'Out' | 'InOut' | 'OutIn'
type Curve = 'Sine' | 'Quad' | 'Cubic' | 'Quart' | 'Quint' | 'Expo' | 'Circ' | 'Back' | 'Elastic'

declare global {
    interface Math {
        clamp(x: number, a: number, b: number): number
        degree(value: number): number
        ease(direction: Direction, curve: Curve, value: number): number
        frac(value: number): number
        lerp(x: number, y: number, s: number): number
        lerpClamped(x: number, y: number, s: number): number
        mod(x: number, y: number): number
        radian(value: number): number
        randomFloat(min: number, max: number): number
        randomInt(min: number, max: number): number
        remap(a: number, b: number, c: number, d: number, x: number): number
        remapClamped(a: number, b: number, c: number, d: number, x: number): number
        unlerp(a: number, b: number, x: number): number
        unlerpClamped(a: number, b: number, x: number): number
    }
}

Math.clamp = native.Clamp
Math.degree = native.Degree
Math.ease = (direction, curve, value) => native[`Ease${direction}${curve}`](value)
Math.frac = native.Frac
Math.lerp = native.Lerp
Math.lerpClamped = native.LerpClamped
Math.mod = native.Mod
Math.radian = native.Radian
Math.randomFloat = native.Random
Math.randomInt = native.RandomInteger
Math.remap = native.Remap
Math.remapClamped = native.RemapClamped
Math.unlerp = native.Unlerp
Math.unlerpClamped = native.UnlerpClamped

const hypot = (...values: number[]) => {
    if (!values.length) return 0

    const [head, ...rest] = values
    if (!rest.length) return head

    let sum = head ** 2
    for (const value of rest) {
        sum += value ** 2
    }

    return sum ** 0.5
}

const max = (...values: number[]) => {
    if (!values.length) return -Infinity

    const [head, ...rest] = values
    if (!rest.length) return head

    let sum = head
    for (const value of rest) {
        sum = native.Max(sum, value)
    }

    return sum
}

const min = (...values: number[]) => {
    if (!values.length) return Infinity

    const [head, ...rest] = values
    if (!rest.length) return head

    let sum = head
    for (const value of rest) {
        sum = native.Min(sum, value)
    }

    return sum
}

passThrough(Math, ['acosh', 'asinh', 'atanh', 'clz32', 'fround', 'imul'])

implement(Math, {
    abs: native.Abs,
    acos: native.Arccos,
    asin: native.Arcsin,
    atan: native.Arctan,
    atan2: native.Arctan2,
    cbrt: (x) => x ** (1 / 3),
    ceil: native.Ceil,
    cos: native.Cos,
    cosh: native.Cosh,
    exp: (x) => Math.E ** x,
    expm1: (x) => Math.E ** x - 1,
    floor: native.Floor,
    hypot,
    log: native.Log,
    log10: (x) => native.Log(x) / native.Log(10),
    log1p: (x) => native.Log(1 + x),
    log2: (x) => native.Log(x) / native.Log(2),
    max,
    min,
    pow: (x, y) => x ** y,
    random: () => native.Random(0, 1),
    round: native.Round,
    sign: native.Sign,
    sin: native.Sin,
    sinh: native.Sinh,
    sqrt: (x) => x ** 0.5,
    tan: native.Tan,
    tanh: native.Tanh,
    trunc: native.Trunc,
})
