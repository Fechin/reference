---
title: How to generate a hash of a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to generate a hash of a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const hash = str => str.split('').reduce((prev, curr) => Math.imul(31, prev) + curr.charCodeAt(0) | 0, 0);
```

### Or

```js {.wrap}
const hash = str => str.split('').reduce((prev, curr) => (((prev << 5) - prev) + curr.charCodeAt(0)) | 0, 0);
```

### Example

```js {.wrap}
hash('hello');      // 99162322
```