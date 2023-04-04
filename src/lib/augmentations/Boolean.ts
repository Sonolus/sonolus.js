import { passThrough } from './utils.js'

passThrough(Boolean.prototype, ['valueOf'])
