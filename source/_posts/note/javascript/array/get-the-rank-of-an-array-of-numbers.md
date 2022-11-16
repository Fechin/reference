---
title: How to get the rank of an array of numbers in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to get the rank of an array of numbers only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const ranking = (arr) => arr.map((x, y, z) => z.filter(w => w > x).length + 1);
```

### Example

```js {.wrap}
ranking([80, 65, 90, 50]);      // [2, 3, 1, 4]
ranking([80, 80, 70, 50]);      // [1, 1, 3, 4]
ranking([80, 80, 80, 50]);      // [1, 1, 1, 4]
```