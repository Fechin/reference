---
title: How to get all n-th items of an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to get all n-th items of an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getNthItems = (arr, nth) => arr.filter((_, i) => i % nth === nth - 1);
```

### Example

```js {.wrap}
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);    // [2, 4, 6, 8]
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);    // [3, 6, 9]
```