import { defineConfig } from 'oxfmt'

export default defineConfig({
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    sortImports: {},
    ignorePatterns: [
        '**/*.*',

        '!build.js',
        '!oxfmt.config.ts',
        '!oxlint.config.ts',
        '!README.md',

        '!src/**/*.*',
    ],
})
