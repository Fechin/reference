---
title: How to swap the rows and columns of a matrix in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to swap the rows and columns of a matrix only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));
```

### Or

```js {.wrap}
const transpose = matrix => matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
```

### Or

```js {.wrap}
const transpose = matrix => matrix.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), []);
```

### Example

```js {.wrap}
transpose([             // [
    [1, 2, 3],          //      [1, 4, 7],
    [4, 5, 6],          //      [2, 5, 8],
    [7, 8, 9],          //      [3, 6, 9],
]);                     //  ]
```