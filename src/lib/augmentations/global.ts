import { passThrough } from './utils.js'

passThrough(globalThis, [
    'atob',
    'btoa',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'escape',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'unescape',
])
