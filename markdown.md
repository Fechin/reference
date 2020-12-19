---
title: Markdown
date: 2020-12-14 18:28:43
icon: icon-markdown
background: bg-purple-500
tags:
    - md
    - Markup
categories:
    - Toolkit
intro: A quick reference cheatsheet to the Markdown syntax.
---

Quick Reference {.cols-3}
---------------

### Headers (atx style)

```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

### Headers (setext style)

```markdown
Header 1
========
```

```markdown
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

```markdown
+ Item 1
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
    a. item 3a
    b. item 3b
```


### Emphasis

```markdown
*italic*
_italic_
```

```markdown
**bold**
__bold__
```

```markdown
`inline code`
~~struck out~~
```

### Links

```markdown
[link](http://google.com)
```

```markdown
[link][google]
[google]: http://google.com
```

```markdown
<http://google.com>
```


### Horizontal line

```markdown
----
```
or
```markdown
****
```


### Tables

```markdown
| Column 1 Heading | Column 2 Heading |
| ---------------- | ---------------- |
| Some content     | Other content    |
```

or
```markdown
Column 1 Heading | Column 2 Heading
--- | ---
Some content | Other content
```


### Images {.col-span-2}

```markdown
![Alt text](/path/to/img.jpg)
![Alt text](/path/to/img.jpg "title")
![Alt text][img]
```

```markdown
[img]: http://foo.com/img.jpg
```

### Code

```
    4 space indent
    makes a code block
```

~~~markdown
```p­ython
def print (str)
 ­ ­ ­ ­pri­nt(str)
```
~~~


~~~markdown
```js
codeFences.withLanguage()
```
~~~

### Backslash escapes

| Characters | Escape | Description           |
|------------|--------|-----------------------|
| \\         | \\\\   | backslash             |
| \`         | \\\`   | backtick              |
| \*         | \\\*   | asterisk              |
| \_         | \\\_   | underscore            |
| \{\}       | \\\{\} | curly braces          |
| \[\]       | \\\[\] | square brackets       |
| \(\)       | \\\(\) | parentheses           |
| \#         | \\\#   | hash mark             |
| \+         | \\\+   | plus sign             |
| \-         | \\\-   | minus sign \(hyphen\) |
| \.         | \\\.   | dot                   |
| \!         | \\\!   | exclamation mark      |
{.show-header}