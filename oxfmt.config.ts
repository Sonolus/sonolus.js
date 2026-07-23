import { defineConfig } from 'oxfmt'

export default defineConfig({
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    sortImports: {},
    ignorePatterns: [
        '**/*.*',

        '!build.js',
        '!eslint.config.js',
        '!oxfmt.config.ts',
        '!README.md',

        '!src/**/*.*',
    ],
})
