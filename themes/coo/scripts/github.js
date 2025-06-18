hexo.extend.helper.register('request_cheatsheet', () => {
  return 'https://github.com/Fechin/reference/issues/new?title=Cheatsheet+request%3A+&labels=request&template=cheatsheet-request.md&assignee=Fechin';
});

hexo.extend.helper.register('contributing', () => {
  return 'https://github.com/Fechin/reference';
});

hexo.extend.helper.register('edit_page', function () {
  const postPage = this.page.layout === 'post';
  let url = 'https://github.com/Fechin/reference';
  if (postPage) {
    url += `/blob/main/source/_posts/${this.page.slug}.md`;
  }
  return url;
});
