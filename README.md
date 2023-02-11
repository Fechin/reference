# 🔥 Reference - Cheat Sheets for Developers

[![love](https://badgen.net/badge/make%20with/love/pink)](#)
[![License](https://badgen.net/badge/license/MIT/blue)](https://github.com/Fechin/reference/blob/main/LICENSE)
[![Follow us on Twitter](https://img.shields.io/twitter/follow/FechinLi?style=social)](https://twitter.com/FechinLi)


Reference is a collection of cheatsheets contributed by open source angels. It shares a quick reference cheat sheet for developers in a nice layout. \[ [中文版](https://github.com/jaywcjlove/reference) | ... \]

We encourage you to share your own cheat sheets with the community and make Reference even better. If you notice a cheat sheet that could be improved, feel free to submit a [pull request](#contributing).




## 👀 Live Demonstration

You can view the cheat sheets live at https://quickref.me

[![Quick reference](https://quickref.me/assets/image/preview.png)](https://quickref.me/)





## 🗂️ Directory structure
```
.
├── source
│   ├── _posts   # Cheatsheet source files
│   │   ├── awk.md
│   │   ├── vim.md # => https://quickref.me/vim
│   │   ├── php.md
│   │   ├── css.md # => https://quickref.me/css
│   │   ├── ...
│   └── widget   # Widget files
│       └── chmod.html
├── public       # Distribution files
├── _config.yml
├── gulpfile.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── themes
    └── coo      # Theme files
```




## 🤝 Contributing

We would like to extend our gratitude to you for considering a contribution to Reference. Your support is what makes QuickRef.ME a truly amazing resource. Please feel free to [submit issues](https://github.com/Fechin/reference/issues/new?assignee=Fechin) and enhancement requests.

For consistency, we encourage you to refer to the [https://quickref.me/quickref](https://quickref.me/quickref) when creating or editing cheatsheets. To get started with development, follow these steps:

1. Clone Github repo `git clone https://github.com/Fechin/reference.git`
2. Install `npm` package manager (Read [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
3. Run `npm install` in the root folder to install dependencies.
4. Run `npm run dev` to start a dev server. This serves the project and live reloads when any files are changed, then visit http://127.0.0.1:4000 preview.
5. Submit a pull request and wait for it to be reviewed and merged.



To create or edit a cheat sheet, you'll need to create or edit a markdown file in `source/_posts/{filename}.md`. The file should include a front matter section with the following format:


```markdown
---
title: QuickRef
date: 2020-11-25 18:28:43
icon: icon-style
background: bg-emerald-600
tags:
categories:
- Other
  intro: This is a reference of styles that you can use on quickref cheatsheets!
---
```
Only the `title` and `intro` fields are required, and the other options can be left blank. 


<a href="https://github.com/Fechin/reference/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Fechin/reference" />
</a>


## 🐦 Follow us on Twitter

[![Follow us on Twitter](https://img.shields.io/twitter/follow/FechinLi?color=%234a99e9&style=for-the-badge)](https://twitter.com/FechinLi)

Stay up-to-date with our project by following us on Twitter! Get all the latest news and updates right in your feed. It's the perfect way to stay in the loop.




## 📃 License

The project is licensed under the [MIT](https://github.com/Fechin/reference/blob/main/LICENSE) License and is maintained by [Fechin](https://github.com/Fechin).

