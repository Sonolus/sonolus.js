#!/usr/bin/env node

import { buildCLI } from './build/index.js'
import { devCLI } from './dev/index.js'

if (process.argv.includes('--dev')) {
    devCLI()
} else if (process.argv.includes('--build')) {
    buildCLI()
} else {
    console.error('Unknown arguments.')
    console.error('Supported arguments: --dev, --build')
}
