---
title: How to create an array of cumulative sum in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to create an array of cumulative sum only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const accumulate = arr => arr.map((sum => value => sum += value)(0));
```

### Or

```js {.wrap}
const accumulate = arr => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], []);
```

### Or

```js {.wrap}
const accumulate = arr => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], 0);
```

### Example

```js {.wrap}
accumulate([1, 2, 3, 4]);   // [1, 3, 6, 10]
// 1             = 1
// 1 + 2         = 3
// 1 + 2 + 3     = 6
// 1 + 2 + 3 + 4 = 10
```