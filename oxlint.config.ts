import { defineConfig } from 'oxlint'

export default defineConfig({
    plugins: ['eslint', 'typescript'],
    categories: {
        correctness: 'error',
    },
    options: {
        typeAware: true,
    },
    env: {
        builtin: true,
    },
    ignorePatterns: ['**/*.*', '!src/**/*.*'],
    rules: {
        'typescript/explicit-module-boundary-types': 'error',
        'typescript/switch-exhaustiveness-check': [
            'error',
            {
                considerDefaultExhaustiveForUnions: true,
            },
        ],
        'typescript/restrict-template-expressions': 'off',
        'typescript/unbound-method': 'off',
    },
})
