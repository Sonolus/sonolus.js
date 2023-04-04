import { passThrough } from './utils.js'

passThrough(Function.prototype, ['toString'])
