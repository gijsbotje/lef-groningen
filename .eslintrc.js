/* global module */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
},
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'react-hooks'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    indent: 'off',
    'no-console': 'error',
    'linebreak-style': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],

    // import plugin: https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/no-extraneous-dependencies': 'off',
    'import/first': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin']],
        'newlines-between': 'never',
      },
    ],
    'react/forbid-prop-types': 'off',
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@afosto'],
      },
    ],

    // react plugin: https://github.com/yannickcr/eslint-plugin-react
    'react/jsx-filename-extension': 'off',
  },
};
