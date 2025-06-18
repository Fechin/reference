module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // Tailwind CSS compatibility
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer']
      }
    ],
    'no-descending-specificity': null,
    'selector-class-pattern': null // Allow camelCase class names
  },
  ignoreFiles: [
    'node_modules/**/*',
    'public/**/*',
    'themes/coo/source/css/highlightjs/**/*',
    '**/*.min.css'
  ]
};
