// eslint.config.cjs  (CommonJS, so __dirname works)
const { FlatCompat } = require('@eslint/eslintrc');
const { resolve } = require('path');
const typescriptParser = require('@typescript-eslint/parser');

// Create a compatibility instance
const compat = new FlatCompat({
  baseDirectory: resolve(__dirname),
  // Do not include eslint:recommended here to avoid circular reference
  recommendedConfig: {},
});

module.exports = [
  // Import eslint:recommended directly from the compatibility layer
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ),

  // ➌  File‑specific overrides
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
      react: require('eslint-plugin-react'),
      'react-native': require('eslint-plugin-react-native'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'react/prop-types': 'off',
    },
    settings: { react: { version: 'detect' } },
  },
];
