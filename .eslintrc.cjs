/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  globals: { React: true, JSX: true },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'tailwind.config.cjs',
    'postcss.config.cjs',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module',
    'ecmaVersion': 'latest',
    'ecmaFeatures': { jsx: true },
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react-refresh',
    'react',
    'react-hooks',
    'prettier',
    'unicorn',
    'import',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        jsxSingleQuote: false,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto',
        trailingComma: 'all',
        proseWrap: 'always',
        tailwindFunctions: ['tv', 'cn'],
        tailwindConfig: './tailwind.config.cjs',
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        selector: ['typeLike', 'enumMember'],
      },
      {
        custom: {
          match: false,
          regex: '^I[A-Z]|^(Interface|Props|State)$',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/default': 'off',
    'import/export': 'off',
    'import/first': 'error',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-var': 'error',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 'warn',
    'react/function-component-definition': ['warn', { 'namedComponents': 'arrow-function' }],
    'react/jsx-pascal-case': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/prefer-node-protocol': 'warn',
  },
  overrides: [
    {
      files: ['vite.config.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
