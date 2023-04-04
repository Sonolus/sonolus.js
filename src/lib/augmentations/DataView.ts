import { passThrough } from './utils.js'

passThrough(DataView.prototype, [
    'getBigInt64',
    'getBigUint64',
    'getFloat32',
    'getFloat64',
    'getInt16',
    'getInt32',
    'getInt8',
    'getUint16',
    'getUint32',
    'getUint8',
])
