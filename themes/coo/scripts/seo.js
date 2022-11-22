const fs = require('fs');
const path = require('path');

hexo.extend.helper.register("page_title", function () {
    let title = "";
    if (this.is_home()) {
        title = `${this.config.title} - ${this.config.subtitle}`;
    } else if (this.page.layout === "note") {
        title = `${this.page.title} - ${this.config.title}`;
    } else if (this.is_page()) {
        title = `${this.page.title} - ${this.config.title}`;
    } else if (this.is_post()) {
        title = this.page.title;
        let hasCommand = this.page.categories.findOne({name: "Linux Command"});
        if (hasCommand) {
            title += " Command";
        }
        title = `${title} Cheat Sheet & Quick Reference`;
    } else if (this.page._isNotePagination) {
        title = `Page ${this.page.current} of Notes - ${this.config.title}`
    }
    return title;
});

hexo.extend.helper.register("page_description", function () {
    let description;
    if (this.is_home()) {
        description = this.config.description;
    } else if (this.page != null && this.page.intro != null) {
        description = this.strip_html(this.markdown(this.page.intro)).substring(0, 110);
    } else {
        description = this.strip_html(this.page.content).substring(0, 130);
    }
    description = description.replace(/[\r\n\s\s+]+/g, " ");
    return description;
});


hexo.extend.helper.register("page_keywords", function () {
    let keywords = this.config.keywords;
    if (this.page.tags && this.page.tags.each) {
        this.page.tags.each(function (tag) {
            keywords += ("," + tag.name);
        });
    }
    return keywords;
});

hexo.extend.helper.register("page_image", function () {
    let homePng = "preview.png";
    let postPng = "";
    if (this.is_post()) {
        postPng = `${this.page.slug}-preview.png`;
    }

    let version = (Math.random() + 1).toString(36).substring(7);
    let imageURL;

    // Check file exists
    let postPath = path.resolve("./", "source/assets/image/", postPng);
    if (fs.existsSync(postPath)) {
        // Generate image url
        imageURL = `${this.config.url}/assets/image/${postPng}?v=${version}`;
    } else {
        // console.warn(`Warning: ${postPath} not Found!`);
        imageURL = `${this.config.url}/assets/image/${homePng}?v=${version}`;
    }
    return imageURL;
});