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
    // Disable @apply deprecation warning, as this is a Tailwind CSS feature
    'at-rule-no-deprecated': null,
    // Allow duplicate selectors, as this is common in generated CSS
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    // Allow camelCase class names
    'selector-class-pattern': null,
    // Allow camelCase ID selectors
    'selector-id-pattern': null,
    // Allow unknown properties (Tailwind generated CSS variables)
    'property-no-unknown': null,
    // Allow unknown type selectors (custom elements)
    'selector-type-no-unknown': null,
    // Allow unknown declaration values
    'declaration-property-value-no-unknown': null,
    // Allow duplicate custom properties
    'declaration-block-no-duplicate-custom-properties': null,
    // Allow multiple declarations on single line
    'declaration-block-single-line-max-declarations': null,
    // Allow decimal precision
    'number-max-precision': null,
    // Allow unknown media feature values
    'media-feature-name-value-no-unknown': null,
    // Allow non-kebab-case keyframe names
    'keyframes-name-pattern': null,
    // Allow empty source files
    'no-empty-source': null
  },
  ignoreFiles: [
    'node_modules/**/*',
    'public/**/*',
    'themes/coo/source/css/highlightjs/**/*',
    '**/*.min.css'
  ]
};
