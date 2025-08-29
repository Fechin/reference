module.exports = {
  // JavaScript files
  '*.{js,mjs}': ['eslint --fix', 'prettier --write'],

  // CSS files
  '*.css': ['stylelint --fix', 'prettier --write'],

  // All other files that Prettier supports
  '*.{md,json,yml,yaml}': ['prettier --write']
};
