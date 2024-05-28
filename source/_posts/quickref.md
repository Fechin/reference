---
title: CheatSheets
date: 2020-11-25 18:28:43
background: bg-gradient-to-l from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
tags:
  - guide
  - reference
categories:
  - Other
intro:
  This is the magic syntax variant manual that you can use on CheatSheets.zip, It's a good practice for contributors.
plugins:
  - copyCode
---

## Getting Started

### Develop Setup

- Clone Repository [View on Github](https://github.com/Fechin/reference.git)
  ```shell script {.wrap}
  $ git clone https://github.com/Fechin/reference.git
  ```
- Install Dependencies in the project directory
  ```shell script
  $ npm install
  ```
- Start a Dev Server [http://localhost:4000](http://localhost:4000)
  ```shell script
  $ npm run dev
  ```
- Create or modify `source/_posts/{name}.md`
- Send us pull request and chill {.marker-timeline}

It's a good practice to refer to the source code of the
[CheatSheets reference](https://github.com/Fechin/reference/blob/main/source/_posts/quickref.md).

### Directory Structure

```yaml
.
├── source
│   ├── _posts   # Cheatsheet source files
│   │   ├── awk.md
│   │   ├── vim.md # => cheatsheets.zip/vim
│   │   ├── php.md
│   │   ├── css.md # => cheatsheets.zip/css
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

### Cheatsheet Structure {.row-span-2}

```yaml
.
├── Section 1   # Header
│   ├── Card 1
│   ├── Card 2
│   ├── Card 3
│   ├── ...
├── Section 2
│   ├── Card 1
│   │   ├── Paragraph
│   │   ├── Code
│   │   ├── <hr/> (aka "---")
│   │   ├── List
│   │   │   ├── Paragraph
│   │   │   └── Code
│   │   └── Table
│   │       ├── Paragraph
│   │       └── Code
│   ├── Card 2
│   ├── Card 3
│   └── ...
├── Section 3
├── Section 4
└── ...
```

---

- One cheatsheet contains multiple sections
- One section contains multiple cards
- One card can contain Code, Table, List and Paragraph
- One list can contain Code and Paragraph
- One table can contain Code and Paragraph

### Syntax Variants

- [Section Variants](#section-variants)
- [Card Variants](#card-variants)
- [Table Variants](#table-variants)
- [List Variants](#list-variants)
- [Code Variants](#code-variants)
- [Paragraph Variants](#paragraph-variants)
- [Cards Example](#cards-example)

All the magic variants supported by CheatSheets.zip

### Create source/\_posts/demo.md

```markdown
## Getting Started

### List Card {.col-span-2}

- Share quick reference
- Cheatsheet for developers ... {.style-timeline}

### Table Card

| id  | name    |
| --- | ------- |
| 1   | Roberta |

{.show-header}
```

## Section Variants

### Section Overview {.secondary}

| -           | -                               |
| ----------- | ------------------------------- |
| `{.cols-1}` | one-column layout               |
| `{.cols-2}` | two-column layout               |
| `{.cols-3}` | three-column layout _(default)_ |
| ...         |                                 |
| `{.cols-6}` | six-column layout               |

---

- Section contains multiple cards
- Use {.cols-`n`} to specify section as a `n`-column layout
- Click the preview button below to focus on the section

[Preview](/quickref#section-variants) {.link-arrow}

### .cols-1

```text
# One Column Example {.cols-1}
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  1                                  ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  2                                  ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

#### ↓ Source Code

```markdown
## One Column Example {.cols-1}

### 1

### 2
```

[Preview](resolutions#lists-of-resolutions) {.link-arrow}

### .cols-2

```text
# Two Columns Example
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  1              ┆ ┆  2              ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  3              ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

#### ↓ Source Code

```markdown
## Two Columns Example {.cols-2}

### 1

### 2

### 3
```

[Preview](resolutions#getting-started) {.link-arrow}

### .cols-3 (default)

```text
# Default
╭┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈╮
┆  1       ┆ ┆  2       ┆ ┆  3       ┆
╰┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈╮
┆  4       ┆
╰┈┈┈┈┈┈┈┈┈┈╯
```

#### ↓ Source Code

```markdown
## Default

### 1

### 2

### 3

### 4
```

## Card Variants

### Card Overview {.secondary}

#### Specifies the number of columns the card spans

| -               | -                      |
| --------------- | ---------------------- |
| `{.col-span-2}` | [Example](#col-span-2) |
| `{.col-span-3}` |                        |
| ...             |                        |
| `.col-span-6}`  |                        |

#### Specifies the number of rows the card spans {.text-left}

| -               | -                      |
| --------------- | ---------------------- |
| `{.row-span-2}` | [Example](#row-span-2) |
| `{.row-span-3}` |                        |
| ...             |                        |
| `{.row-span-6}` |                        |

#### Emphasize card (aka `H3` Section)

| -              | -                                         |
| -------------- | ----------------------------------------- |
| `{.primary}`   | Red titles, [Example](#primary-card)      |
| `{.secondary}` | Yellow titles, [Example](#secondary-card) |

A complete example: [Cards Example](#cards-example)

### .col-span-2 {.row-span-2}

#### The fifth card spans two columns

```text
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  1      ┆ ┆  2      ┆ ┆  3      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  4      ┆ ┆  5                  ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1

### 2

### 3

### 4

### 5 {.col-span-2}
```

#### The second card spans two columns

```text
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  1      ┆ ┆  2                  ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  3      ┆ ┆  4      ┆ ┆  5      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1

### 2 {.col-span-2}

### 3

### 4

### 5
```

#### The fourth card spans two columns

```text
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  1      ┆ ┆  2      ┆ ┆  3      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  4                  ┆ ┆  5      ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1

### 2

### 3

### 4 {.col-span-2}

### 5
```

### .row-span-2 {.row-span-2}

#### The first card spans two rows

```text
╭┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 1      ┆ ┆ 2       ┆ ┆ 3       ┆
┆        ┆ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
┆        ┆ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆        ┆ ┆ 4       ┆ ┆ 5       ┆
╰┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1 {.row-span-2}

### 2

### 3

### 4

### 5
```

#### The second card spans two rows

```text
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 1       ┆ ┆ 2      ┆ ┆ 3       ┆
╰┈┈┈┈┈┈┈┈┈╯ ┆        ┆ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ┆        ┆ ╭┈┈┈┈┈┈┈┈┈╮
┆ 4       ┆ ┆        ┆ ┆ 5       ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1

### 2 {.row-span-2}

### 3

### 4

### 5
```

#### The third card spans two rows

```text
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈╮
┆ 1       ┆ ┆ 2       ┆ ┆ 3      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ┆        ┆
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ┆        ┆
┆ 4       ┆ ┆ 5       ┆ ┆        ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1

### 2

### 3 {.row-span-2}

### 4

### 5
```

### .col-span-2 .row-span-2

```text
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 1                   ┆ ┆ 2       ┆
┆                     ┆ ╰┈┈┈┈┈┈┈┈┈╯
┆                     ┆ ╭┈┈┈┈┈┈┈┈┈╮
┆                     ┆ ┆ 3       ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 4       ┆ ┆ 5       ┆ ┆ 6       ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

#### ↓ Source Code

```markdown
### 1 {.col-span-2 .row-span-2}

### 2

### 3

### 4

### 5
```

Spans rows and columns at the same time

## Table Variants

### Table Overview {.secondary}

| -                | -                            |
| ---------------- | ---------------------------- |
| `{.show-header}` | Show the header of the table |
| `{.shortcuts}`   | Render shortcut key style    |
| `{.bold-first}`  | Bold first column            |
| `{.plus-first}`  | Plus first column            |
| `{.show-header}` | Show headers                 |
| `{.left-text}`   | Align the last column left   |
| `{.no-wrap}`     | Don't wrap text              |

### Basic table

| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |

#### ↓ Source Code

```markdown
| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |
```

### .shortcuts

| -          | -        |
| ---------- | -------- |
| `Ctrl` `N` | New File |
| `Ctrl` `S` | Save     |

{.shortcuts}

#### ↓ Source Code

```markdown
| -          | -        |
| ---------- | -------- |
| `Ctrl` `N` | New File |
| `Ctrl` `S` | Save     |

{.shortcuts}
```

### .show-header

| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |

{.show-header}

#### ↓ Source Code

```markdown
| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |

{.show-header}
```

### .left-text

| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |

{.left-text}

#### ↓ Source Code

```markdown
| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |

{.left-text}
```

### .bold-first

| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |

{.bold-first}

#### ↓ Source Code

```markdown
| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |

{.bold-first}
```

## List Variants

### List Overview {.secondary}

List columns

| -           | -                      |
| ----------- | ---------------------- |
| `{.cols-1}` | one column _(default)_ |
| `{.cols-2}` | two columns            |
| ...         |                        |
| `{.cols-6}` |                        |

List markers

| -                    | -                          |
| -------------------- | -------------------------- |
| `{.marker-none}`     | Marker is not set          |
| `{.marker-timeline}` | Marker style like timeline |
| `{.marker-round}`    | Round marker               |

### One Column (Default)

- Share quick reference.
- cheat sheet for developers.
- Contributed by open source angels.
- Manage your code snippets.

#### ↓ Source Code

```markdown
- Share quick reference.
- cheat sheet for developers.
- Contributed by open source angels.
- Manage your code snippets.
```

### .cols-3

- Share
- Quick
- Reference
- And
- Cheat Sheet
- For
- Developers

{.cols-3}

#### ↓ Source Code

```markdown
- Share
- Quick
- Reference
- And
- Cheat Sheet
- For
- Developers

{.cols-3}
```

### .marker-timeline {.row-span-2}

- **Renamed** to `new_name`
  ```shell script
  $ git branch -m <new_name>
  ```
- **Push** and reset
  ```shell script
  $ git push origin -u <new_name>
  ```
- **Delete** remote branch `shell script     $ git push origin --delete <old>     `

{.marker-timeline}

#### ↓ Source Code

````markdown
- **Renamed** to `new_name`
  ```shell script
  $ git branch -m <new_name>
  ```
- **Push** and reset
  ```shell script
  $ git push origin -u <new_name>
  ```
- **Delete** remote branch `shell script     $ git push origin --delete <old>     `

{.marker-timeline}
````

### .marker-none

- Share
- Quick
- Reference
- And
- Cheat Sheet

{.cols-2 .marker-none}

#### ↓ Source Code

```markdown
- Share
- Quick
- Reference
- And
- Cheat Sheet

{.cols-2 .marker-none}
```

### .marker-round

- Share
- Quick
- Reference

{.marker-round}

#### ↓ Source Code

```markdown
- Share
- Quick
- Reference

{.marker-round}
```

## Code Variants

### Basic code

```js
cheatsheets.zip.is(() => {
  awesome.site();
});
```

```js
here.is.some.more();
```

#### ↓ Source Code

`````markdown
````js
cheatsheets.zip.is(() => {
  awesome.site()
})
\```

```js
here.is.some.more()
\```
````
`````

Code blocks can be placed one after the other.

### Code with headings

#### index.js

```js
cheatsheets.zip.is(() => {
  awesome.site();
});
```

#### other.js

```js
here.is.some.more();
```

#### ↓ Source Code

````markdown
#### index.js

```js
cheatsheets.zip.is(() => {
  awesome.site();
});
```

#### other.js

```js
here.is.some.more();
```
````

Code blocks can have headings.

### Line wrapping

```js {.wrap}
<script>(function(d,s){if(window.Promise&&[].includes&&Object.assign&&window.Map)return;var js,sc=d.getElementsByTagName(s)[0];js=d.createElement(s);js.src='https://cdn.polyfill.io/v2/polyfill.min.js';sc.parentNode.insertBefore(js, sc);}(document,'script'))</script>
```

#### ↓ Source Code

````markdown {.wrap}
```js {.wrap}
<script>(function(d,s){if(window.Promise&&[].includes&&Object.assign&&window.Map)return;var js,sc=d.getElementsByTagName(s)[0];js=d.createElement(s);js.src='https://cdn.polyfill.io/v2/polyfill.min.js';sc.parentNode.insertBefore(js, sc);}(document,'script'))</script>
```
````

Add `{.wrap}` to wrap long lines.

### Long lines (default)

```js
function createNode(nodeName: string, options: { key: string }) {
  return true
}
```

Long lines will have scrollbars.

## Paragraph Variants

### Header paragraphs

The text that appears in the header

#### ↓ Source Code

```markdown {.wrap}
### Basic paragraphs

The text that appears in the header
```

### Middle paragraphs {.row-span-2}

- This is a list

This paragraph will appear in the middle

```js
cheatsheets.is(() => {
  awesome.site();
});
```

#### ↓ Source Code

````markdown
### Middle paragraphs

- This is a list

This paragraph will appear in the middle

```js
cheatsheets.is(() => {
  awesome.site();
});
```
````

### Footer paragraphs {.row-span-2}

```js
cheatsheets.is(() => {
  awesome.site();
});
```

#### ↓ Source Code

````markdown
```js
cheatsheets.is(() => {
  awesome.site();
});
```

This paragraph will appear in the footer
````

This paragraph will appear in the footer

### Crosslink

Add `{.link-arrow}` to make big loud external links:

```js
[Home](/) {.link-arrow}
```

[Home](/) {.link-arrow}

## Cards Example

### row-span-2 {.row-span-2}

```
1
```

### col-span-2 {.col-span-2}

```
2
```

### Primary Card {.primary}

```
3
```

Add `{.primary}` to make the title red.

### Secondary Card {.secondary}

```
4
```

Add `{.secondary}` to make the title yellow.

### col-span-3 {.col-span-3}

```
5
```
