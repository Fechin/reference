---
title: How to trim the file extension from a file name in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to trim the file extension from a file name only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const trimExt = fileName => fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.');
```

### Example

```js {.wrap}
trimExt('document');            // document
trimExt('document.pdf');        // document
trimExt('document.2020.pdf');   // document.2020
```