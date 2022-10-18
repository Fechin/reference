---
title: How to partition an array based on a condition in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to partition an array based on a condition only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const partition = (arr, criteria) => arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);
```

### Example

```js {.wrap}
partition([1, 2, 3, 4, 5], n => n % 2);     // [[2, 4], [1, 3, 5]]
```