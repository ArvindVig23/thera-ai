// eslint.config.cjs

const { FlatCompat } = require('@eslint/eslintrc');
const path = require('path');
const typescriptParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactNativePlugin = require('eslint-plugin-react-native');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');

const compat = new FlatCompat({
  baseDirectory: path.resolve(__dirname),
  recommendedConfig: {},
});

module.exports = [
  {
    ignores: ['eslint.config.cjs'],
  },

  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ),

  {
    files: ['*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-native': reactNativePlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-native/no-color-literals': 'off',
      'react-native/sort-styles': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
    },
    settings: {
      react: {
        version: '19.0.0',
        pragma: 'React',
      },
    },
  },
];
