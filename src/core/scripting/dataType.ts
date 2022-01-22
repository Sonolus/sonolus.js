export type DataType = number | boolean

export function convertValue(value: DataType): number {
    return typeof value === 'number' ? value : value ? 1 : 0
}
