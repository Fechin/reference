const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        ...globals.node,
        ...globals.browser
      }
    }
  },
  {
    files: ['source/sw.js'],
    languageOptions: {
      globals: {
        ...globals.serviceworker
      }
    }
  },
  {
    files: ['themes/coo/scripts/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        hexo: 'readonly'
      }
    }
  },
  {
    files: ['themes/coo/source/js/main.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        Fuse: 'readonly'
      }
    }
  },
  {
    ignores: [
      'node_modules/**',
      'public/**',
      'db.json',
      '.deploy_git/**',
      'themes/coo/source/js/fuse_*.js'
    ]
  }
];
