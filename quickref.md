---
title: QuickRef
date: 2020-11-25 18:28:43
icon: icon-style
background: bg-green-600
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

| - | - |
|---------------|---------------------------------|
| `cols-1`    |  one column _(default)_           |
| `cols-2`    |                                   |
| `cols-3`    |  three column                     |
| ...           |                                 |
| `cols-11`   |                                   |
| `cols-12`   |                                   |



See: [H2 section](#h2-section-2)

### H3 section


| - | - |
|-------------------|-------------------------------------|
| `primary` | Primary section |
| `secondary` | Secondary section |
#### Span n columns.

| - | - |
|---------------|-----------------------------------|
| `col-span-1`  |                                   |
| ...           |                                   |
| `col-span-12` |                                   |
#### Span n rows.

| - | - |
|---------------|-----------------------------------|
| `row-span-1`  |                                   |
| ...           |                                   |
| `row-span-12` |                                   |
|               |                                   |

See: [H3 section](#h3-section-2)

### Tables 


| - | - |
|---------------|----------------|
| `bold-first` | Bold first column |
| `plus-first` | Plus first column |
| `show-header` | Show headers |
| `left-text` | Align the last column left |
| `no-wrap` | Don't wrap text |
| `shortcuts` | Shortcut keys |

See: [Tables](#tables-2)


### Lists {.row-span-2}


| - | - |
|---------------|----------------|
| `style-none` | No marker is shown	|
#### Layout

| - | - |
|---------------|----------------|
| `cols-1`    |  one column _(default)_  |
| `cols-2`    |                          |
| `cols-3`    |  three column            |
| ...           |                        |
| `cols-11`   |                          |
| `cols-12`   |                          |



### Code


| - | - |
|---------------|----------------|
| `wrap` | Enables line-wrapping |

See: [Code](#code-2)

### Paragraphs


| - | - |
|---------------|----------------|
| `link-arrow` | Pretty links with arrows |

See: [Paragraphs](#paragraphs-2) 



See: [Lists](#lists-2) 

### Global

| - | - |
|---------------|----------------|
| `hidden`      | Hide an element|



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

### Setup blocks

```js
import React from 'react'
```

```js
class Hello extends React.Component {
  render () {
    return <span>Hello</span>
  }
}
```

Add `{.bg-gray}` to a `pre` or `table` or `ul`__.

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
```

[Home](/) {.link-arrow}




Tables {.cols-3}
------

### Basic table

#### Date

| Example         | Output                 |
| ---             | ---                    |
| `%m/%d/%Y`      | `06/05/2013`           |
| `%A, %B %e, %Y` | `Sunday, June 5, 2013` |
| `%b %e %a`      | `Jun 5 Sun`            |

#### Time

| Example         | Output                 |
| ---             | ---                    |
| `%H:%M`         | `23:05`                |
| `%I:%M %p`      | `11:05 PM`             |

A basic table with heading level 4.

### Shortcuts


| - | - |
|------|-------|
| `V` | Vector |
| `P` | Pencil |
| `T` | Text |
| `L` | Line |
| `R` | Rectangle |
| `O` | Oval |
| `U` | Rounded |
 {.shortcuts}


Add `{.shortcuts}` to tables.

### Show headers

| Prefix | Example               | What     |
| ---    | ---                   | ---      |
| `//`   | `//hr[@class='edge']` | Anywhere |
| `./`   | `./a`                 | Relative |
| `/`    | `/html/body/div`      | Root     |
{.show-header}

Add `{.show-header}` to add headers.


### Rowspan {.col-span-2}
| Stage              | Direct Products | ATP Yields |
|--------------------|-----------------|------------|
| Glycolysis         | 2 ATP                       ||
| ^^                 | 2 NADH          | 3--5 ATP   |
| Pyruvaye oxidation | 2 NADH          | 5 ATP      |
| Citric acid cycle  | 2 ATP                       ||
| ^^                 | 6 NADH          | 15 ATP     |
| ^^                 | 2 FADH2         | 3 ATP      |
| **30--32** ATP                                  |||
{.show-header}

#### Source Code

```
| Stage              | Direct Products | ATP Yields |
|--------------------|-----------------|------------|
| Glycolysis         | 2 ATP                       ||
| ^^                 | 2 NADH          | 3--5 ATP   |
| Pyruvaye oxidation | 2 NADH          | 5 ATP      |
| Citric acid cycle  | 2 ATP                       ||
| ^^                 | 6 NADH          | 15 ATP     |
| ^^                 | 2 FADH2         | 3 ATP      |
| **30--32** ATP                                  |||
{.show-header}
```

QuickRef uses markdown-it-multimd-table to render the table, See：[markdown-it-multimd-table](https://www.npmjs.com/package/markdown-it-multimd-table#rowspan-optional)




Lists {.cols-3}
--------

### One column (Default)
- Item 1
- Item 2
- Item 3

### Five column 
- Item 1
- Item 2
- Item 3
- Item 4
- Item 5
- Item 6
- Item 7
- Item 8
- Item 9
{.cols-4}

### No marker is shown	
- Item 1
- Item 2
- Item 3
- Item 4
- Item 5
- Item 6
{.cols-2 .style-none}


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

