---
title: Emmet
date: 2020-12-14 18:28:43
background: bg-[#95c844]
tags:
  - snippets
  - coding
  - html
  - css
  - abbr
categories:
  - Toolkit
intro: |
  [Emmet](https://emmet.io/) is a web-developer’s toolkit for boosting HTML & CSS code writing, which allows you to write large HTML code blocks at speed of light using well-known CSS selectors.
plugins:
  - copyCode
---

## Emmet Syntax

### Getting started

Let us start to improve your development to the speed of light.

- [Emmet in Visual Studio Code](https://code.visualstudio.com/docs/editor/emmet) _(code.visualstudio.com)_
- [Emmet 2 for Sublime Text](https://github.com/emmetio/sublime-text-plugin) _(github.com)_
- [Emmet for Coda](https://emmet.io/download/coda/) _(emmet.io)_
- [Emmet for Atom](https://github.com/emmetio/emmet-atom#readme) _(github.com)_

### Multiplication: \*

<code>ul>li\*5</code>

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

### Child: >

`nav>ul>li`

```html
<nav>
  <ul>
    <li></li>
  </ul>
</nav>
```

### Custom attributes {.col-span-2}

`p[title="Hello world"]`

```html
<p title="Hello world"></p>
```

`td[rowspan=2 colspan=3 title]`

```html
<td rowspan="2" colspan="3" title=""></td>
```

`[a='value1' b="value2"]`

```html
<div a="value1" b="value2"></div>
```

### Text: {}

`a{Click me}`

```html
<a href="">Click me</a>
```

`p>{Click }+a{here}+{ to continue}`

```html {.wrap}
<p>Click <a href="">here</a> to continue</p>
```

### ID and CLASS attributes {.row-span-2}

`#header`

```html
<div id="header"></div>
```

`.title`

```html
<div class="title"></div>
```

`form#search.wide`

```html
<form id="search" class="wide"></form>
```

`p.class1.class2.class3`

```html
<p class="class1 class2 class3"></p>
```

### Implicit tag names {.row-span-2}

`.class`

```html
<div class="class"></div>
```

`em>.class`

```html
<em><span class="class"></span></em>
```

`ul>.class`

```html
<ul>
  <li class="class"></li>
</ul>
```

`table>.row>.col`

```html
<table>
  <tr class="row">
    <td class="col"></td>
  </tr>
</table>
```

### Sibling: +

`div+p+bq`

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

### Climb-up: ^

`div+div>p>span+em^bq`

```html
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>
```

`div+div>p>span+em^^bq`

```html
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

### Grouping: ()

<code>div>(header>ul>li\*2>a)+footer>p</code>

```html
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

<code>(div>dl>(dt+dd)\*4)+footer>p</code>

```html
<div>
  <dl>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
  </dl>
</div>
<footer>
  <p></p>
</footer>
```

### Indexing: $ {.col-span-2}

<code>ul>li.item$\*3</code>

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

<code>h$[title=item$]{Header $}\*3</code>

```html
<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>
```

<code>ul>li.item$$$\*3</code>

```html
<ul>
  <li class="item001"></li>
  <li class="item002"></li>
  <li class="item003"></li>
</ul>
```

<code>ul>li.item$@-\*3</code>

```html
<ul>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>
```

<code>ul>li.item$@2\*3</code>

```html
<ul>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
</ul>
```

## Also see {.cols-1}

- [Emmet Cheat sheet](https://docs.emmet.io/cheat-sheet/) _(docs.emmet.io)_
