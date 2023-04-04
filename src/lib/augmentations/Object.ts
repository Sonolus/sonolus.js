import { passThrough } from './utils.js'

passThrough(Object, [
    'entries',
    'fromEntries',
    'getOwnPropertyDescriptor',
    'getOwnPropertyDescriptors',
    'getOwnPropertyNames',
    'getOwnPropertySymbols',
    'getPrototypeOf',
    'hasOwn',
    'is',
    'isExtensible',
    'isFrozen',
    'isSealed',
    'keys',
    'values',
])

passThrough(Object.prototype, [
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
])
