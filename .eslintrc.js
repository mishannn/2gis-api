module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  rules: {
    // Импорт правил Prettier
    'prettier/prettier': ['error'],
    'no-debugger': ['warn'],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.ts'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {
        // Правила TS
        '@typescript-eslint/ban-ts-ignore': ['warn'],
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/interface-name-prefix': ['error'],
        '@typescript-eslint/camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: null,
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'parameter',
            format: null,
          },
          // {
          //   selector: 'variableLike',
          //   format: ['strictCamelCase'],
          //   leadingUnderscore: 'forbid',
          //   trailingUnderscore: 'forbid',
          // },
          // {
          //   selector: 'variable',
          //   format: ['strictCamelCase', 'UPPER_CASE'],
          //   leadingUnderscore: 'forbid',
          //   trailingUnderscore: 'forbid',
          // },
          // {
          //   selector: 'memberLike',
          //   format: ['strictCamelCase'],
          //   leadingUnderscore: 'forbid',
          //   trailingUnderscore: 'forbid',
          // },
          // {
          //   selector: 'property',
          //   format: null,
          // },
          // {
          //   selector: 'parameterProperty',
          //   format: null,
          //   leadingUnderscore: 'forbid',
          //   trailingUnderscore: 'forbid',
          // },
          // {
          //   selector: 'enumMember',
          //   format: ['PascalCase'],
          //   leadingUnderscore: 'forbid',
          //   trailingUnderscore: 'forbid',
          // },
          // {
          //   selector: 'typeLike',
          //   format: ['PascalCase'],
          //   leadingUnderscore: 'forbid',
          //   trailingUnderscore: 'forbid',
          // },
        ],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
