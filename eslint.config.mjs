import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
    {
        ignores: ['**/*.*', '!src/**/*.*'],
    },

    eslint.configs.recommended,

    ...tsEslint.configs.strictTypeChecked,
    ...tsEslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/no-confusing-void-expression': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/unbound-method': 'off',
            '@typescript-eslint/prefer-promise-reject-errors': 'off',
        },
    },

    eslintConfigPrettier,
)
