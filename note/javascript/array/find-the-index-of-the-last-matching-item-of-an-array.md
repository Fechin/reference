---
title: How to find the index of the last matching item of an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to find the index of the last matching item of an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const lastIndex = (arr, predicate) => arr.reduce((prev, curr, index) => predicate(curr) ? index : prev, -1);
```

### Or

```js {.wrap}
const lastIndex = (arr, predicate) => arr.map(item => predicate(item)).lastIndexOf(true);
```

### Example

```js {.wrap}
lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], i => i % 2 === 1);   // 4
lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], i => i > 6);         // 5
```