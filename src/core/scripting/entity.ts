import { Data } from '.'

export type Entity =
    | number
    | {
          archetype: number
          data?: Data
      }
