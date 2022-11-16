---
title: How to generate an array of random integers in a given range in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Random
layout: note
---



In this Article we will go through how to generate an array of random integers in a given range only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const randomArrayInRange = (min, max, n) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
```

### Example

```js {.wrap}
randomArrayInRange(1, 100, 10);     // [11, 82, 41, 35, 76, 83, 43, 15, 60, 54]
```