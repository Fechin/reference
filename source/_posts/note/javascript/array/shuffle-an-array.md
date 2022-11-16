---
title: How to shuffle an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to shuffle an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const shuffle = arr => arr.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);
```

### Or

```js {.wrap}
const shuffle = arr => arr.sort(() => .5 - Math.random());
```

### Example

```js {.wrap}
shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);   // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
```