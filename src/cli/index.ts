#!/usr/bin/env node

import { buildCLI } from './build/index.js'
import { devCLI } from './dev/index.js'

const parseArgs = (args: string[]) => {
    const [mode] = args.slice(args.length - 1)
    if (mode !== '--dev' && mode !== '--build') return

    return { mode } as const
}

const parsed = parseArgs(process.argv)
if (!parsed) {
    console.error('Unknown arguments.')
    console.log('Usage: sonolus-cli mode')
    console.log('    mode:')
    console.log('        --dev       Start development server')
    console.log('        --build     Build for production')

    process.exit(1)
}

switch (parsed.mode) {
    case '--dev':
        devCLI()
        break
    case '--build':
        buildCLI()
        break
}
