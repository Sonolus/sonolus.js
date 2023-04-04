import { passThrough } from './utils.js'

passThrough(RegExp.prototype, ['compile', 'exec', 'test'])
