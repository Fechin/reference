---
title: How to normalize file path slashes in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to normalize file path slashes only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const normalizePath = path => path.replace(/[\\/]+/g, '/');
```

### Example

```js {.wrap}
normalizePath('\\foo\\bar\\baz\\');         // /foo/bar/baz/
normalizePath('.//foo//bar///////baz/');    // ./foo/bar/baz/
```