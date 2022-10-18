---
title: How to merge two arrays in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to merge two arrays only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// Merge but don't remove the duplications
const merge = (a, b) => a.concat(b);
```

### Or

```js {.wrap}
const merge = (a, b) => [...a, ...b];

// Merge and remove the duplications
const merge = [...new Set(a.concat(b))];
```

### Or

```js {.wrap}
const merge = [...new Set([...a, ...b])];
```