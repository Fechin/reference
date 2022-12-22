hexo.extend.generator.register('json', function (locals) {

    let searchName = "search.json";
    let datas = locals.posts.sort('date') || [];

    let res = []
    let index = 0

    datas.each(function (data) {
        if (data.indexing !== undefined && !data.indexing) return;
        if (data.layout === "note") return;
        let temp_data = {}

        temp_data.index = index;
        temp_data.title = data.title;
        temp_data.path = data.permalink.replace(hexo.config.url, "");
        temp_data.icon = data.icon;
        temp_data.background = data.background;
        temp_data.intro = data.intro;

        // categories
        temp_data.categories = [];
        if (data.categories && data.categories.length > 0) {
            data.categories.forEach(function (category) {
                temp_data.categories.push(category.name);
            });
        }

        // tags
        temp_data.tags = [];
        if (data.tags && data.tags.length > 0) {
            data.tags.forEach(function (tag) {
                temp_data.tags.push(tag.name);
            });
        }
        // sections
        temp_data.sections = data.sections;

        res[index] = temp_data;
        index += 1;
    });

    let json = JSON.stringify(res);
    return {path: searchName, data: json};
});