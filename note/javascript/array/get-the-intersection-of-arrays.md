---
title: How to get the intersection of arrays in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to get the intersection of arrays only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getIntersection = (a, ...arr) => [...new Set(a)].filter(v => arr.every(b => b.includes(v)));
```

### Example

```js {.wrap}
getIntersection([1, 2, 3], [2, 3, 4, 5]);               // [2, 3]
getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]);    // [3]
```
