# Reference <a href="https://twitter.com/FechinLi" title="Follow us on Twitter"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/FechinLi?style=social"></a>

[![love](https://badgen.net/badge/make%20with/love/pink)](#)
[![License](https://badgen.net/badge/license/MIT/blue)](https://github.com/Fechin/reference/blob/main/LICENSE)
[![contributors](https://badgen.net/github/contributors/Fechin/reference)](https://github.com/Fechin/reference/graphs/contributors)
[![forks](https://badgen.net/github/forks/Fechin/reference)](https://github.com/Fechin/reference/network/members)
[![starts](https://badgen.net/github/stars/Fechin/reference)](#)



**Reference** is a collection of **cheatsheets** contributed by open source angels. It shares a quick reference cheat sheet for developers in a nice layout. \[ [中文版](https://github.com/jaywcjlove/reference) | ... \]

We're happy to see your best skill cheat sheets in **Reference**, If you see a cheatsheet here is not fit, you can fix it or provide a better cheatsheet by submitting a [PR](#contributing).


## Live Demo
Read the cheatsheet gracefully https://quickref.me

[![Quick reference](https://quickref.me/assets/image/preview.png)](https://quickref.me/)



## Directory structure
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

## Contributing

Thanks for your interest on contributing to reference, it's people like you that make [QuickRef.ME](https://quickref.me) such a amazing site 🎉🎉. Feel free to [submit issues](https://github.com/Fechin/reference/issues/new?assignee=Fechin) and enhancement requests.

**It's a good practice to refer to the cheatsheet of the [QuickRef Cheatsheet](https://quickref.me/quickref)**.


### Development setup

1. Clone Github repo `git clone https://github.com/Fechin/reference.git`
2. Install `npm` package manager (Read [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
3. Run `npm install` in the root folder to install dependencies.
4. Run `npm run dev` to start a dev server. This serves the project and live reloads when any files are changed, then visit http://127.0.0.1:4000 preview.
5. Send us pull request and chill.

A `source/_posts/{filename}.md` file will be processed into a cheat sheet, let's create or edit a markdown file:

### Front Matter
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
Just need `title` and `intro`, and ignore other options. I will complete it if it can be released.

### CSS classes
QuickRefs uses [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs) and supports adding classes via its syntax. Also, there is a reference of styles that you can use on `quickref.me` cheat sheets:  https://quickref.me/quickref


<a href="https://github.com/Fechin/reference/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Fechin/reference" />
</a>



## License
[MIT](https://github.com/Fechin/reference/blob/main/LICENSE) © [Fechin](https://github.com/Fechin)

