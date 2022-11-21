---
title: QuickRef
date: 2020-11-25 18:28:43
icon: icon-star
background: bg-red-600
tags:
    - guide
    - reference
categories:
    - Other
intro: This is a reference of styles that you can use on quickref cheatsheets!
---

Getting Started
--------

### Overview {.primary}

- [Section Variants](#section-variants)
- [Card Variants](#card-variants)
- [Tables Variants](#tables-variants)
- [Lists Variants](#lists-variants)
- [Code Variants](#code-variants)
- [Paragraph Variants](#paragraph-variants)


### Global

| -         | -               |
|-----------|-----------------|
| `.hidden` | Hide an element |



### How to add variants {.secondary}

```
H2 section
----------

### H3 card {.col-span-2}

### primary section {.primary}

[Home](/) {.link-arrow}
```

QuickRefs uses [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs#markdown-it-attrs---), and supports adding classes via its syntax.




Section Variants
--------

### Section Overview {.secondary}
 

| -           | -                               |
|-------------|---------------------------------|
| `{.cols-1}` | one-column layout               |
| `{.cols-2}` | two-column layout               |
| `{.cols-3}` | three-column layout _(default)_ |
| ...         |                                 |
| `{.cols-6}` | six-column layout               |

------- 
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
One Column Example {.cols-1}
----------

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
Two Columns Example {.cols-2}
----------

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
Default
----------

### 1
### 2
### 3
### 4
```




Card Variants
--------

### Card Overview {.secondary}

#### Specifies the number of columns the card spans

| -               | - |
|-----------------|---|
| `{.col-span-2}` | [Example](#col-span-2)  |
| `{.col-span-3}` |   |
| ...             |   |
| `.col-span-6}`  |   |

#### Specifies the number of rows the card spans {.text-left}

| -               | - |
|-----------------|---|
| `{.row-span-2}` | [Example](#row-span-2)  |
| `{.row-span-3}` |   |
| ...             |   |
| `{.row-span-6}` |   |

#### Emphasize card (aka `H3` Section)

| -              | -                                                     |
|----------------|-------------------------------------------------------|
| `{.primary}`   | Red titles, [Example](#primary-card) |
| `{.secondary}` | Yellow titles, [Example](#secondary-card) |

A complete example: [Cards Example](#cards-example)



### .col-span-2 {.row-span-2}

#### The fifth card spans two columns

```markdown
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  1      ┆ ┆  2      ┆ ┆  2      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  4      ┆ ┆  5                  ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```
-----------
```markdown
### 1
### 2
### 3
### 4
### 5 {.col-span-2}
```


#### The second card spans two columns

```markdown
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  1      ┆ ┆  2                  ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  3      ┆ ┆  4      ┆ ┆  5      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```
-----------
```markdown
### 1
### 2 {.col-span-2}
### 3
### 4
### 5
```

#### The fourth card spans two columns

```markdown
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  1      ┆ ┆  2      ┆ ┆  3      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ 
┆  4                  ┆ ┆  5      ┆ 
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ 
```
-----------
```markdown
### 1
### 2
### 3
### 4 {.col-span-2}
### 5
```





### .row-span-2 {.row-span-2}

#### The first card spans two rows

```markdown
╭┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 1      ┆ ┆ 2       ┆ ┆ 3       ┆
┆        ┆ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
┆        ┆ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆        ┆ ┆ 4       ┆ ┆ 5       ┆
╰┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```
----------
```markdown
### 1 {.row-span-2}
### 2
### 3
### 4
### 5
```

#### The second card spans two rows

```markdown
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 1       ┆ ┆ 2      ┆ ┆ 3       ┆
╰┈┈┈┈┈┈┈┈┈╯ ┆        ┆ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ┆        ┆ ╭┈┈┈┈┈┈┈┈┈╮
┆ 4       ┆ ┆        ┆ ┆ 5       ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```
---------
```markdown
### 1
### 2 {.row-span-2}
### 3
### 4
### 5
```

#### The third card spans two rows

```markdown
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈╮ 
┆ 1       ┆ ┆ 2       ┆ ┆ 3      ┆ 
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ┆        ┆ 
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ┆        ┆ 
┆ 4       ┆ ┆ 5       ┆ ┆        ┆ 
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈╯ 
```
-----------
```markdown
### 1
### 2
### 3 {.row-span-2}
### 4
### 5
```



### .col-span-2 .row-span-2

```markdown
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





Tables Variants
------


### Table Overview {.secondary}

| -                | -                            |
|------------------|------------------------------|
| `{.show-header}` | Show the header of the table |
| `{.shortcuts}`   | Render shortcut key style    |
| `{.bold-first}`  | Bold first column            |
| `{.plus-first}`  | Plus first column            |
| `{.show-header}` | Show headers                 |
| `{.left-text}`   | Align the last column left   |
| `{.no-wrap}`     | Don't wrap text              |


### Basic table

| Pattern  | Description            |
|----------|------------------------|
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a tot z          |


#### ↓ Source Code

```markdown
| Pattern  | Description            |
|----------|------------------------|
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a tot z          |
```


### .shortcuts

| -           | -          |
|-------------|------------|
| `Ctrl` `N`  | New File   |
| `Ctrl` `S`  | Save       |
{.shortcuts}

#### ↓ Source Code

```markdown
| -           | -          |
|-------------|------------|
| `Ctrl` `N`  | New File   |
| `Ctrl` `S`  | Save       |
{.shortcuts}
```



### .show-header

| Pattern  | Description            |
|----------|------------------------|
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a tot z          |
{.show-header}

#### ↓ Source Code

```markdown
| Pattern  | Description            |
|----------|------------------------|
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a tot z          |
{.show-header}
```



### .left-text

| Pattern  | Description            |
|----------|------------------------|
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a tot z          |
{.left-text}

#### ↓ Source Code

```markdown
| Pattern  | Description            |
|----------|------------------------|
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a tot z          |
{.left-text}
```



### .bold-first

| Pattern  | Description            |
|----------|------------------------|
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a tot z          |
{.bold-first}

#### ↓ Source Code

```markdown
| Pattern  | Description            |
|----------|------------------------|
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a tot z          |
{.bold-first}
```



Lists Variants
--------

### List Overview {.secondary}
List columns

| -            | -                      |
|--------------|------------------------|
| `{.cols-1}`  | one column _(default)_ |
| `{.cols-2}`  | two columns            |
| ...          |                        |
| `{.cols-12}` |                        |

List markers

| -          | -                      |
|------------|------------------------|
| `{.marker-none}`  | Marker is not set |
| `{.marker-timeline}`  | Marker style like timeline                       |
| `{.marker-round}`  | Round marker         |


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
- **Delete** remote branch
    ```shell script
    $ git push origin --delete <old>
    ```
{.marker-timeline}

#### ↓ Source Code
```markdown
- **Renamed** to `new_name`
    ```shell script
    $ git branch -m <new_name>
    ```
- **Push** and reset
    ```shell script
    $ git push origin -u <new_name>
    ```
- **Delete** remote branch
    ```shell script
    $ git push origin --delete <old>
    ```
{.marker-timeline}
```

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


Code Variants
----

### Basic code

```js
quickref.me.is(() => {
  awesome.site()
})
```

```js
here.is.some.more()
```

#### ↓ Source Code
```markdown

```js
quickref.me.is(() => {
  awesome.site()
})
\```

```js
here.is.some.more()
\```
```

Code blocks can be placed one after the other.




### Code with headings

#### index.js

```js
quickref.me.is(() => {
    awesome.site()
})
```

#### other.js

```js
here.is.some.more()
```

#### ↓ Source Code

```markdown
#### index.js
```js
quickref.me.is(() => {
    awesome.site()
})
\```
#### other.js
```js
here.is.some.more()
\```
```

Code blocks can have headings.



### Line wrapping

```js {.wrap}
<script>(function(d,s){if(window.Promise&&[].includes&&Object.assign&&window.Map)return;var js,sc=d.getElementsByTagName(s)[0];js=d.createElement(s);js.src='https://cdn.polyfill.io/v2/polyfill.min.js';sc.parentNode.insertBefore(js, sc);}(document,'script'))</script>
```

#### ↓ Source Code

```markdown {.wrap}
```js {.wrap}
<script>(function(d,s){if(window.Promise&&[].includes&&Object.assign&&window.Map)return;var js,sc=d.getElementsByTagName(s)[0];js=d.createElement(s);js.src='https://cdn.polyfill.io/v2/polyfill.min.js';sc.parentNode.insertBefore(js, sc);}(document,'script'))</script>
\```
```

Add `{.wrap}` to wrap long lines.



### Long lines (default)

```js
function createNode(nodeName: string, options: { key: string }) {
  return true
}
```

Long lines will have scrollbars.


Paragraphs
--------

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
quickref.is(() => {
  awesome.site()
})
```

#### ↓ Source Code
```markdown
### Middle paragraphs

- This is a list

This paragraph will appear in the middle

```js
quickref.is(() => {
  awesome.site()
})
\```
```



### Footer paragraphs {.row-span-2}

```js
quickref.is(() => {
  awesome.site()
})
```

#### ↓ Source Code
```markdown
```js
quickref.is(() => {
  awesome.site()
})
\```

This paragraph will appear in the footer
```

This paragraph will appear in the footer



### Crosslink

Add `{.link-arrow}` to make big loud external links:

```js
[Home](/) {.link-arrow}
```

[Home](/) {.link-arrow}



Cards Example
----------

### row-span-2  {.row-span-2}

```
1
```


### col-span-2   {.col-span-2}

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