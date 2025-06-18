module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Error level rules
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],

    // ES6+ best practices
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'prefer-arrow-callback': 'error',

    // Best practices
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',

    // Function related
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-loop-func': 'error',

    // Objects and arrays
    'dot-notation': 'error'
  },

  globals: {
    hexo: 'readonly',
    Utils: 'readonly',
    Fuse: 'readonly'
  }
};
