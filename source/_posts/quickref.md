---
title: QuickRef
date: 2020-11-25 18:28:43
icon: icon-style
background: bg-emerald-600
tags:
    - guide
    - reference
categories:
    - Other
intro: This is a reference of styles that you can use on quickref cheatsheets!
---

Variants {.cols-3}
--------

### H2 section

| -          | -                      |
|------------|------------------------|
| `.cols-1`  | one column _(default)_ |
| `.cols-2`  |                        |
| `.cols-3`  | three column           |
| ...        |                        |
| `.cols-11` |                        |
| `.cols-12` |                        |



See: [H2 section](#h2-section-2)

### H3 section


| -            | -                 |
|--------------|-------------------|
| `.primary`   | Primary section   |
| `.secondary` | Secondary section |
#### Span n columns
| -              | - |
|----------------|---|
| `.col-span-1`  |   |
| ...            |   |
| `.col-span-12` |   |
#### Span n rows
| -              | - |
|----------------|---|
| `.row-span-1`  |   |
| ...            |   |
| `.row-span-12` |   |
|                |   |

See: [H3 section](#h3-section-2)

### Tables 


| -              | -                          |
|----------------|----------------------------|
| `.bold-first`  | Bold first column          |
| `.plus-first`  | Plus first column          |
| `.show-header` | Show headers               |
| `.left-text`   | Align the last column left |
| `.no-wrap`     | Don't wrap text            |
| `.shortcuts`   | Shortcut keys style        |

See: [Tables](#tables-2)


### Lists {.row-span-2}


| -                 | -              |
|-------------------|----------------|
| `.marker-none`     | No marker      |
| `.marker-round`    | Round style    |
| `.marker-timeline` | Timeline style |

#### Layout

| -          | -                      |
|------------|------------------------|
| `.cols-1`  | one column _(default)_ |
| `.cols-2`  |                        |
| `.cols-3`  | three column           |
| ...        |                        |
| `.cols-11` |                        |
| `.cols-12` |                        |

See: [Lists](#lists-2)



### Code


| -       | -                     |
|---------|-----------------------|
| `.wrap` | Enables line-wrapping |

See: [Code](#code-2)

### Paragraphs


| -             | -                        |
|---------------|--------------------------|
| `.link-arrow` | Pretty links with arrows |

See: [Paragraphs](#paragraphs-2) 



### Global

| -         | -               |
|-----------|-----------------|
| `.hidden` | Hide an element |



### How to add variants {.secondary}

```
H2 section {.cols-3}
----------

### H3 section {.col-span-2}

### primary section {.primary}

[Home](/) {.link-arrow}
```

QuickRefs uses [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs#markdown-it-attrs---), and supports adding classes via its syntax.

Code {.cols-3}
----

### Basic code

```js
here.is(() => {
  some.code()
})
```

```js
here.is.some.more()
```

Code blocks can be placed one after the other.
<br>
<br>
See: [Cheatsheets](/)

### Code with headings

#### index.js

```js
here.is(() => {
  some.code()
})
```

#### other.js

```js
here.is.some.more()
```

Code blocks can have headings.


### Line wrapping

```js {.wrap}
<script>(function(d,s){if(window.Promise&&[].includes&&Object.assign&&window.Map)return;var js,sc=d.getElementsByTagName(s)[0];js=d.createElement(s);js.src='https://cdn.polyfill.io/v2/polyfill.min.js';sc.parentNode.insertBefore(js, sc);}(document,'script'))</script>
```

Add `{.wrap}` to wrap long lines.


### Long lines

```js
function createNode(nodeName: string, options: { key: string }) {
  return true
}
```

Long lines will have scrollbars.

Paragraphs {.cols-3}
--------

### Basic paragraphs
The text that appears in the header

This is a basic section with paragraphs in it. When paragraphs are the first elements in an H3 section's body, they appear as white.


### Description
```
...
```
A gray background
```
···
```

When paragraphs appear after `pre`/`table`/`ul`, they appear with a gray background.


### Crosslink

Add `{.link-arrow}` to make big loud external links:

```
···
···
···
```

[Home](/) {.link-arrow}




Tables Variants {.cols-3}
------


### Table Overview {.secondary}

| -                | -                            |
|------------------|------------------------------|
| `{.shortcuts}`   | Render shortcut key style    |
| `{.show-header}` | Show the header of the table |


### Basic table {.row-span-2}

| Expression  | Description               |
|-------------|---------------------------|
| `$1` … `$9` | Parameter 1 ... 9         |
| `$0`        | Name of the script itself |
| `$1`        | First argument            |
| `${10}`     | Positional parameter 10   |
| `$#`        | Number of arguments       |


#### ↓ Source Code

```markdown
| Expression  | Description               |
|-------------|---------------------------|
| `$1` … `$9` | Parameter 1 ... 9         |
| `$0`        | Name of the script itself |
| `$1`        | First argument            |
| `${10}`     | Positional parameter 10   |
| `$#`        | Number of arguments       |
```


### .show-header {.row-span-2}

| Expression  | Description               |
|-------------|---------------------------|
| `$1` … `$9` | Parameter 1 ... 9         |
| `$0`        | Name of the script itself |
| `$1`        | First argument            |
| `${10}`     | Positional parameter 10   |
{.show-header}


#### ↓ Source Code

```markdown
| Expression  | Description               |
|-------------|---------------------------|
| `$1` … `$9` | Parameter 1 ... 9         |
| `$0`        | Name of the script itself |
| `$1`        | First argument            |
| `${10}`     | Positional parameter 10   |
{.show-header}
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




Lists Variants {.cols-3}
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


H2 section {.cols-5}
----------

### One

```
···
```

### Two

```
···
```

### Three

```
···
```

### Four

```
···
```

### Five

```
···
```


H3 section {.cols-3}
----------

### row-span-2  {.row-span-2}

```
···
```


### col-span-2   {.col-span-2}

```
···
```

### Primary section {.primary}

```
···
···
```
Add `{.primary}` to make the title red.


### Secondary section {.secondary}

```
···
```
Add `{.secondary}` to make the title yellow.

### col-span-3 {.col-span-3}

```
···
```

### Supported

Each section can have the following children:

#### White

- `pre`
- `ul`
- `table`

#### Gray

- `p`
- `h4`

### H3 section

Every box is an H3 section. The box will encompass everything inside the body of the H3.

This is a basic section with paragraphs in it.

