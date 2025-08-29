const pagination = require('hexo-pagination');

hexo.extend.generator.register('notes-pagination', function (locals) {
  const config = this.config;
  const posts = locals.posts.filter((post) => post.layout === 'note').sort('-date');
  return pagination('notes', posts, {
    perPage: config.per_page,
    layout: ['notes'],
    format: '%d/',
    data: {
      _isNotePagination: true
    }
  });
});
