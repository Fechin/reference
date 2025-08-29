module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // new feature
        'fix', // bug fix
        'docs', // documentation update
        'style', // code formatting, no logic changes
        'refactor', // code refactoring
        'perf', // performance optimization
        'test', // add tests
        'chore', // build process or auxiliary tool changes
        'ci', // CI/CD related changes
        'build', // build system or external dependency changes
        'revert' // revert commit
      ]
    ],
    'scope-enum': [
      2,
      'always',
      [
        'search', // search functionality
        'theme', // theme related
        'css', // style files
        'js', // JavaScript files
        'content', // content files
        'build', // build related
        'deps', // dependency updates
        'config', // configuration files
        'docs', // documentation
        'layout', // layout templates
        'widget', // components
        'gulp', // Gulp tasks
        'hexo', // Hexo related
        'markdown', // Markdown processing
        'seo', // SEO optimization
        'a11y', // accessibility
        'perf' // performance related
      ]
    ],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never']
  }
};
