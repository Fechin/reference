---
title: How to count the occurrences of a value in an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to count the occurrences of a value in an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```

### Or

```js {.wrap}
const countOccurrences = (arr, val) => arr.filter(item => item === val).length;
```

### Example

```js {.wrap}
countOccurrences([2, 1, 3, 3, 2, 3], 2);                // 2
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a');  // 3
```