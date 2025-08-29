module.exports = {
  // Basic configuration
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',

  // Plugin configuration
  plugins: ['prettier-plugin-tailwindcss'],

  // File-specific configuration
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
        printWidth: 80
      }
    },
    {
      files: '*.yml',
      options: {
        singleQuote: false
      }
    },
    {
      files: '*.json',
      options: {
        trailingComma: 'none'
      }
    },
    {
      files: ['themes/coo/source/css/*.css'],
      options: {
        printWidth: 120
      }
    }
  ]
};
