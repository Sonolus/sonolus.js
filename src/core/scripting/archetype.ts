import { Data } from './data'

export type Archetype =
    | number
    | {
          script: number
          data?: Data
          input?: boolean
      }
