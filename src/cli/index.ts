#!/usr/bin/env node

import { buildCLI } from './build/index.js'
import { devCLI } from './dev/index.js'

const parseArgs = (args: string[]) => {
    const [mode, configPath] = args.slice(args.length - 2)
    if (mode !== '--dev' && mode !== '--build') return

    return { mode, configPath } as const
}

const parsed = parseArgs(process.argv)
if (!parsed) {
    console.error('Unknown arguments.')
    console.log('Usage: sonolus-cli mode config')
    console.log('    mode:')
    console.log('        --dev       Start development server')
    console.log('        --build     Build for production')
    console.log('    config          Path to config file (.js/.cjs/.mjs)')

    process.exit(1)
}

switch (parsed.mode) {
    case '--dev':
        devCLI(parsed.configPath)
        break
    case '--build':
        buildCLI(parsed.configPath)
        break
}
