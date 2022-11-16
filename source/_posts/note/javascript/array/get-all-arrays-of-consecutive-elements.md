---
title: How to get all arrays of consecutive elements in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to get all arrays of consecutive elements only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getConsecutiveArrays = (arr, size) => size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i));
```

### Example

```js {.wrap}
getConsecutiveArrays([1, 2, 3, 4, 5], 2);   // [[1, 2], [2, 3], [3, 4], [4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 3);   // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 6);   // []
```