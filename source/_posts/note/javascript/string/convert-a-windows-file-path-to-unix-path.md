---
title: How to convert a windows file path to unix path in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to convert a windows file path to unix path only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const toUnixPath = path => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');
```

### Example

```js {.wrap}
toUnixPath('./foo/bar/baz');        // foo/bar/baz
toUnixPath('C:\\foo\\bar\\baz');    // /foo/bar/baz
```