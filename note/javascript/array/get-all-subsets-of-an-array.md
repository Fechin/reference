---
title: How to get all subsets of an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to get all subsets of an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getSubsets = arr => arr.reduce((prev, curr) => prev.concat(prev.map(k => k.concat(curr))), [[]]);
```

### Example

```js {.wrap}
getSubsets([1, 2]);     // [[], [1], [2], [1, 2]]
getSubsets([1, 2, 3]);  // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```