import { passThrough } from './utils.js'

passThrough(Symbol, ['for', 'keyFor'])

passThrough(Symbol.prototype, ['toString', 'valueOf'])
