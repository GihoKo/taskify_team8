module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    // @see https://nextjs.org/docs/pages/building-your-application/configuring/eslint#migrating-existing-config
    'plugin:@next/next/recommended',
  ],
  ignorePatterns: ['build', 'dist', 'public', '.eslintrc.cjs', 'next.config.mjs', 'svgo.config.js', 'node_modules/'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    createDefaultProgram: true,
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
  },
  plugins: ['@next/eslint-plugin-next', '@typescript-eslint', 'prettier', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        // @see{@link https://github.com/jsx-eslint/eslint-plugin-react/issues/1461}
        'react/prop-types': 'off',
      },
    },
  ],
  rules: {
    // @see{@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md}
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['input'],
      },
    ],
    'import/no-cycle': 'off', // TODO: 해결법 알아보기
    'react/react-in-jsx-scope': 'off',
    'import/no-absolute-path': 'off',
    'consistent-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'off',
    'no-var': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
    'no-useless-catch': 'off',
    'react/function-component-definition': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-curly-brace-presence': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-multi-assign': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/naming-convention': 'off',
    camelcase: 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error', // or "warn"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['function', 'block'], next: '*' },
      {
        blankLine: 'always',
        prev: ['return', 'try', 'if', 'while', 'iife', 'for'],
        next: '*',
      },
      { blankLine: 'always', prev: '*', next: ['return', 'try', 'if', 'while', 'iife', 'for', 'export'] },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['multiline-const', 'multiline-let', 'multiline-var'],
      },
    ],
    'react/no-unescaped-entities': [
      'warn',
      {
        forbid: [
          {
            char: '>',
            alternatives: ['&gt;'],
          },
          {
            char: '·',
            alternatives: ['&middot;'],
          },
          { char: "'", alternatives: ['&apos;'] },
          { char: '“', alternatives: ['&quot;'] },
          { char: '”', alternatives: ['&quot;'] },
          { char: '•', alternatives: ['&bull;'] },
          { chat: '©', alternatives: ['&copy;'] },
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: '{react*,react*/**,react-dom/**,@tanstack/react-query/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@{layout,pages,components,assets}/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@{lib,utils,hooks,event,api}/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@{store,slice}/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@pages/**/*.style',
            group: 'unknown',
          },
          {
            pattern: '@components/**/*.style',
            group: 'unknown',
          },
          {
            pattern: '{.,..}/**/*.style',
            group: 'unknown',
          },
          {
            pattern: '*.style',
            group: 'unknown',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
  },
};
