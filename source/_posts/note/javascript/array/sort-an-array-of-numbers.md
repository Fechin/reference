---
title: How to sort an array of numbers in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to sort an array of numbers only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const sort = arr => arr.sort((a, b) => a - b);
```

### Example

```js {.wrap}
sort([1, 5, 2, 4, 3]);      // [1, 2, 3, 4, 5]
```