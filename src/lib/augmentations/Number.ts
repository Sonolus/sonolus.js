import { passThrough } from './utils.js'

passThrough(Number, ['isFinite', 'isInteger', 'isNaN', 'isSafeInteger', 'parseFloat', 'parseInt'])

passThrough(Number.prototype, [
    'toExponential',
    'toFixed',
    'toLocaleString',
    'toPrecision',
    'toString',
    'valueOf',
])
