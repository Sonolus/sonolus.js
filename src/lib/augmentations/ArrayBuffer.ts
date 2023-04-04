import { passThrough } from './utils.js'

passThrough(ArrayBuffer, ['isView'])

passThrough(ArrayBuffer.prototype, ['slice'])
