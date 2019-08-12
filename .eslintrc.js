module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  rules: {
    indent: 'off',
    semi: ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        objects: 'always-multiline',
        arrays: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      },
    ],
    'prefer-arrow-callback': ['error'],
    quotes: ['error', 'single'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'max-len': ['error', { code: 120 }],
    'no-undef': 'error',
    '@typescript-eslint/explicit-function-return-type': false,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility': false,
    '@typescript-eslint/no-explicit-any': false,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/no-use-before-define': false,
    '@typescript-eslint/no-empty-interface': false,
    '@typescript-eslint/no-parameter-properties': false,
    '@typescript-eslint/no-angle-bracket-type-assertion': false,
    '@typescript-eslint/no-non-null-assertion': false,
    '@typescript-eslint/no-var-requires': false,
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': false,
        'max-len': 0,
        '@typescript-eslint/camelcase': false,
      },
    },
  ],
};
