hexo.extend.helper.register("request_cheatsheet", function () {
    return `https://github.com/Fechin/reference/issues/new?title=Cheatsheet+request%3A+&labels=request&template=cheatsheet-request.md&assignee=Fechin`;
});

hexo.extend.helper.register("contributing", function () {
    return `https://github.com/Fechin/reference/blob/main/README.md#contributing`;
});


hexo.extend.helper.register("edit_page", function () {
    return `https://github.com/Fechin/reference/blob/main/source/_posts/${this.page.slug}.md`
});