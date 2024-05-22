---
title: Markdown
date: 2020-12-14 18:28:43
background: bg-[#6319bf]
tags:
  - md
  - Markup
  - text
  - format
categories:
  - Programming
intro: This is a quick reference cheat sheet to the Markdown syntax.
plugins:
  - copyCode
---

## Markdown Quick Reference

### Headers (atx style)

<!-- prettier-ignore -->
```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

### Headers (setext style)

<!-- prettier-ignore -->
```markdown
Header 1
========

Header 2
--------
```

### Blockquotes

```markdown
> This is  
> a blockquote
>
> > Nested  
> > Blockquote
```

### Unordered List {.row-span-2}

<!-- prettier-ignore -->
```markdown
* Item 1
* Item 2
  * item 3a
  * item 3b
```

or

```markdown
- Item 1
- Item 2
```

or

<!-- prettier-ignore -->
```markdown
_ Item 1
+ Item 2
```

or

```markdown
- [ ] Checkbox off
- [x] Checkbox on
```

### Ordered List

```markdown
1. Item 1
2. Item 2  
   a. Item 3a  
   b. Item 3b
```

### Links

```markdown
[link](http://google.com)

[link][google]  
[google]: http://google.com

<http://google.com>
```

### Emphasis

<!-- prettier-ignore -->
```markdown
*italic*  
_italic_

**bold**  
__bold__

`inline code`  
~~struck out~~
```

### Horizontal line

Hyphens

<!-- prettier-ignore -->
```markdown
---
```

Asterisks

<!-- prettier-ignore -->
```markdown
***
```

Underscores

<!-- prettier-ignore -->
```markdown
___
```

### Code

````markdown
```javascript
console.log("This is a block code");
```
````

<!-- prettier-ignore -->
```markdown
~~~css
.button {
  border: none;
}
~~~
```

```markdown
    4 space indent makes a code block
```

### Escaped code

Escaped code blocks can be done with more back ticks on the outside or a different symbol.

<!-- prettier-ignore -->
`````markdown
````markdown
```bash
echo hi
```
````

~~~markdown
```bash
echo hi
```
~~~

`````

#### Inline code

```markdown
`Inline code` has back-ticks around it
```

### Tables

```markdown
| Left column | Center column | Right column |
| :---------- | :-----------: | -----------: |
| Cell 1      |   Centered    |        $1600 |
| Cell 2      |    Cell 3     |          $12 |
```

Simple style

<!-- prettier-ignore -->
```markdown
Left column | Center column | Right column
:----------:|:-------------:|:-----------:
   Cell 1   |   Centered    |    $1600
   Cell 2   |    Cell 3     |     $12
```

A markdown table generator: [tableconvert.com](https://tableconvert.com/)

### Images {.col-span-2}

```markdown
![GitHub Logo](/images/logo.png)

![Alt Text](url)
```

#### Image with link

```markdown
[![GitHub Logo](/images/logo.png)](https://github.com/)

[![Alt Text](image_url)](link_url)
```

#### Reference style

```markdown
![alt text][logo]

[logo]: /images/logo.png "Logo Title"
```

### Backslash escapes

| Characters        | Escape                | Description           |
| ----------------- | --------------------- | :-------------------- |
| <code>\\</code>   | <code>\\\\</code>     | Backslash             |
| <code>\`</code>   | <code>\\\`</code>     | Backtick              |
| <code>\*</code>   | <code>\\\*</code>     | Asterisk              |
| <code>\_</code>   | <code>\\\_</code>     | Underscore            |
| <code>\{\}</code> | <code>\\\{\\\}</code> | Curly braces          |
| <code>\[\]</code> | <code>\\\[\\\]</code> | Square brackets       |
| <code>\(\)</code> | <code>\\\(\\\)</code> | Parentheses           |
| <code>\#</code>   | <code>\\\#</code>     | Hash mark             |
| <code>\+</code>   | <code>\\\+</code>     | Plus sign             |
| <code>\-</code>   | <code>\\\-</code>     | Minus sign \(hyphen\) |
| <code>\.</code>   | <code>\\\.</code>     | Dot                   |
| <code>\!</code>   | <code>\\\!</code>     | Exclamation mark      |

{.show-header}
