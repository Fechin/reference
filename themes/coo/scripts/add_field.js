const h2_re = /<h2 id=".*"><a class="h-anchor" href="(#.*)">#<\/a>(.*)<\/h2>/gm;
const h3_re = /<h3 id=".*"><a class="h-anchor" href="(#.*)">#<\/a>(.*)<\/h3>/gm;


hexo.extend.filter.register("after_post_render", function (data) {
    let h2_m;
    let h2_list = [];
    while ((h2_m = h2_re.exec(data.content)) !== null) {
        h2_list.push({
            anchor: h2_m[1].trim(),
            title: h2_m[2].trim(),
            start: h2_m.index
        })
    }

    let h3_list = [];
    for (let i = 0; i < h2_list.length; i++) {
        let start = h2_list[i].start;
        let end = data.content.length;
        let next = h2_list[i + 1];
        if (next !== undefined) {
            end = next.start;
        }
        const h2_section = data.content.substring(start, end);
        let h3_m;
        let h3_items = [];
        while ((h3_m = h3_re.exec(h2_section)) !== null) {
            h3_items.push({
                anchor: h3_m[1].trim(),
                title: h3_m[2].trim()
            });
        }
        h2_list[i] = h2_list[i];
        h3_list.push(h3_items);
    }

    let cards = []
    for (let i = 0; i < h2_list.length; i++) {
        if (h3_list[i].length === 0) {
            continue;
        }
        delete h2_list[i]['start'];
        cards.push({
            h2: h2_list[i],
            h3: h3_list[i]
        });
    }

    data.sections = cards;
    return data;
});
