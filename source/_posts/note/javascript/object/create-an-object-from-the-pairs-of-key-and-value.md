---
title: How to create an object from the pairs of key and value in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to create an object from the pairs of key and value only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const toObj = arr => Object.fromEntries(arr)
```

### Or

```js {.wrap}
const toObj = arr => arr.reduce((a, c) => ((a[c[0]] = c[1]), a), {});
```

### Example

```js {.wrap}
toObj([['a', 1], ['b', 2], ['c', 3]]);      // { a: 1, b: 2, c: 3 }
```