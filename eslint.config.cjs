// eslint.config.cjs (CommonJS)
const { FlatCompat } = require('@eslint/eslintrc');
const path = require('path');
const typescriptParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactNativePlugin = require('eslint-plugin-react-native');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');

// Create a compatibility instance
const compat = new FlatCompat({
  baseDirectory: path.resolve(__dirname),
  // Do not include eslint:recommended here to avoid circular reference
  recommendedConfig: {},
});

module.exports = [
  // Base configuration for all files
  {
    ignores: ['eslint.config.cjs'], // Ignore the ESLint config file itself
  },

  // Import eslint:recommended directly from the compatibility layer
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ),

  // File‑specific overrides
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
      // Disable rules that are causing problems
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't require importing React
      'react-native/no-color-literals': 'off', // Optional: disable if you prefer inline colors
      'react-native/sort-styles': 'warn', // Change to warning instead of error
      '@typescript-eslint/no-require-imports': 'off', // For compatibility with CJS modules
    },
    settings: {
      react: {
        version: 'detect',
        pragma: 'React',
      },
    },
  },
];
