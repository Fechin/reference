const fs = require("fs");
const path = require("path");

hexo.extend.helper.register("icon", (name) => svgIcon(name));

hexo.extend.generator.register("json", function (locals) {
  let searchName = "search.json";
  let datas = locals.posts.sort("date") || [];

  let res = [];
  let index = 0;

  datas.each(function (data) {
    if (data.indexing !== undefined && !data.indexing) return;
    if (data.layout === "note") return;
    let temp_data = {};

    temp_data.index = index;
    temp_data.title = data.title;
    temp_data.path = data.permalink.replace(hexo.config.url, "");
    temp_data.icon = svgIcon(data.slug);
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
  return { path: searchName, data: json };
});

hexo.extend.generator.register("list", function (locals) {
  const themeConfig = hexo.theme.config;
  let content = "";

  themeConfig.index_categories.forEach(function (category) {
    content += `<details>\n<summary>${category}</summary>\n\n`;
    locals.categories
      .findOne({ name: category })
      .posts.sort("-date")
      .map(function (post) {
        content += `- [${post.title}](https://cheatsheets.zip/${post.path}): ${post.intro.trim()}\n`;
      });
    content += `\n</details>\n\n`;
  });

  return {
    path: "list.md",
    data: content,
  };
});

function svgIcon(name) {
  // Check file exists
  let svgPath = path.resolve("./", "source/assets/icon/", `${name}.svg`);
  if (fs.existsSync(svgPath)) {
    return fs.readFileSync(svgPath, "utf8");
  } else {
    return (
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" width="1em">\n' +
      '    <path d="M886.25058594 98.67324219L137.8385 98.67324219c-39.31382813 0-71.47256836 29.21941406-71.47256836 68.59713867l0 687.8025c0 39.37675781 32.15786133 71.60036133 71.47256836 71.60036133l754.3764 0c39.31382813 0 68.51162109-32.22360352 68.51162109-71.60036133L960.72652109 167.2703C960.72558594 127.89256836 925.56529297 98.67324219 886.25058594 98.67324219zM354.49103516 200.47132812c60.54662109 0 109.63617188 49.04727539 109.63617187 109.5516211 0 60.50425781-49.08867187 109.55162109-109.63617187 109.55162109s-109.63617188-49.04727539-109.63617188-109.55162109C244.85477539 249.51772461 293.94353516 200.47132812 354.49103516 200.47132812zM167.03632813 839.84574219c-8.22058594 0-16.50506836-2.83227539-23.23441407-8.62646485-14.99308594-12.86279297-16.73912109-35.45727539-3.87632812-50.47286132l164.34720703-247.7241211c12.20396484-14.26860352 33.32970703-16.65448242 48.42896484-5.47286133l145.00977539 107.69668946 259.82191407-295.15227539c12.30925781-15.44036133 77.58448242-88.16853516 115.79036132-5.68529297 0.04227539-0.12779297 0.08551758 109.06110352 0.12779297 220.54948242 0.04227539 116.28272461 0.06389648 284.78162109 0.06389649 284.78162109C872.72808594 839.54603516 167.37646484 839.84574219 167.03632813 839.84574219z"></path>\n' +
      "</svg>"
    );
  }
}
