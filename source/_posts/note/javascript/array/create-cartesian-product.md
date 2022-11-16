---
title: How to create cartesian product in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to create cartesian product only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const cartesian = (...sets) => sets.reduce((acc, set) => acc.flatMap((x) => set.map((y) => [...x, y])), [[]]);
```

### Example

```js {.wrap}
cartesian([1, 2], [3, 4]);   // [ [1, 3], [1, 4], [2, 3], [2, 4] ]

/*
       3       4
   ---------------
1 | [1, 3]  [1, 4]
  |
2 | [2, 3]  [2, 4]

*/
```
