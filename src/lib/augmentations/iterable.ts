type HasEntries<T> = {
    entries(): IterableIterator<[number, T]>
}

export function iterableEvery<T extends HasEntries<V>, V>(
    this: T,
    callbackfn: (value: V, index: number, iterable: T) => boolean,
): boolean {
    for (const [i, value] of this.entries()) {
        if (!callbackfn(value, i, this)) return false
    }

    return true
}

export function iterableFindIndex<T extends HasEntries<V>, V>(
    this: T,
    callbackfn: (value: V, index: number, iterable: T) => boolean,
): number {
    for (const [i, value] of this.entries()) {
        if (callbackfn(value, i, this)) return i
    }

    return -1
}

export function iterableForEach<T extends HasEntries<V>, V>(
    this: T,
    callbackfn: (value: V, index: number, iterable: T) => void,
): void {
    for (const [i, value] of this.entries()) {
        callbackfn(value, i, this)
    }
}

export function iterableReduce<T extends HasEntries<V>, V, R>(
    this: T,
    callbackfn: (
        previousValue: R | undefined,
        currentValue: V,
        currentIndex: number,
        array: T,
    ) => R,
    initialValue?: R,
): R | undefined {
    let previousValue = initialValue

    for (const [i, value] of this.entries()) {
        previousValue = callbackfn(previousValue, value, i, this)
    }

    return previousValue
}

export function iterableSome<T extends HasEntries<V>, V>(
    this: T,
    callbackfn: (value: V, index: number, iterable: T) => boolean,
): boolean {
    for (const [i, value] of this.entries()) {
        if (callbackfn(value, i, this)) return true
    }

    return false
}
