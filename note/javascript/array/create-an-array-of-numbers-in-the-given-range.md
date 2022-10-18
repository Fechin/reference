---
title: How to create an array of numbers in the given range in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to create an array of numbers in the given range only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);
```

### Or

```js {.wrap}
const range = (min, max) => Array(max - min + 1).fill(0).map((_, i) => min + i);
```

### Or

```js {.wrap}
const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
```

### Example

```js {.wrap}
range(5, 10);   // [5, 6, 7, 8, 9, 10]
```