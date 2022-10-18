---
title: How to find the index of the maximum item of an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to find the index of the maximum item of an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const indexOfMax = arr => arr.reduce((prev, curr, i, a) => curr > a[prev] ? i : prev, 0);
```

### Example

```js {.wrap}
indexOfMax([1, 3, 9, 7, 5]);        // 2
indexOfMax([1, 3, 7, 7, 5]);        // 2
```