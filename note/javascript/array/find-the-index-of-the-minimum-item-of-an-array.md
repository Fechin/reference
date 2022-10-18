---
title: How to find the index of the minimum item of an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to find the index of the minimum item of an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const indexOfMin = arr => arr.reduce((prev, curr, i, a) => curr < a[prev] ? i : prev, 0);
```

### Example

```js {.wrap}
indexOfMin([6, 4, 8, 2, 10]);       // 3
indexOfMin([6, 4, 2, 2, 10]);       // 2
```