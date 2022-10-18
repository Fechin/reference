---
title: How to get indices of a value in an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to get indices of a value in an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const indices = (arr, value) => arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), []);
```

### Or

```js {.wrap}
const indices = (arr, value) => arr.map((v, i) => v === value ? i : false).filter(Boolean);
```

### Example

```js {.wrap}
indices(['h', 'e', 'l', 'l', 'o'], 'l');    // [2, 3]
indices(['h', 'e', 'l', 'l', 'o'], 'w');    // []
```