import { convertValue, DataType } from '.'

export type Data =
    | DataType[]
    | {
          index: number
          values: DataType[]
      }

export function convertData(data: Data): {
    index: number
    values: number[]
} {
    if (Array.isArray(data)) {
        data = {
            index: 0,
            values: data,
        }
    }

    return {
        index: data.index,
        values: data.values.map(convertValue),
    }
}
