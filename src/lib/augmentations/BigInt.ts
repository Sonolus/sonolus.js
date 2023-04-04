import { passThrough } from './utils.js'

passThrough(BigInt, ['asIntN', 'asUintN'])

passThrough(BigInt.prototype, ['toLocaleString', 'toString', 'valueOf'])
