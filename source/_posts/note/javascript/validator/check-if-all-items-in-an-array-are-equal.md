---
title: How to check if all items in an array are equal in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if all items in an array are equal only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const areEqual = arr => arr.length > 0 && arr.every(item => item === arr[0]);
```

### Or

```js {.wrap}
const areEqual = arr => new Set(arr).size === 1;
```

### Example

```js {.wrap}
areEqual([1, 2, 3, 4]);                 // false
areEqual(['hello', 'hello', 'hello']);  // true
```