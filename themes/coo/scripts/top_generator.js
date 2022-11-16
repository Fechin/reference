const path = require('path');
const fs = require('hexo-fs');

const outputFile = path.resolve("./", "source/ga_analytics_tops.json")
const cache = new Map();

hexo.extend.helper.register("topPosts", function (maximum = 4) {
    let posts = cache.get(outputFile);
    if (!posts) {
        let content = fs.readFileSync(outputFile);
        posts = JSON.parse(content);
        cache.set(outputFile, posts);
    }
    return posts.slice(0, maximum);
});
