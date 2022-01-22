import { DataType } from '.'

export type Archetype =
    | number
    | {
          script: number
          data?: {
              index: number
              values: DataType[]
          }
          input?: boolean
      }
