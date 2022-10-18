---
title: How to get union of arrays in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to get union of arrays only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const union = (...arr) => [...new Set(arr.flat())];
```

### Example

```js {.wrap}
union([1, 2], [2, 3], [3]);     // [1, 2, 3]
```