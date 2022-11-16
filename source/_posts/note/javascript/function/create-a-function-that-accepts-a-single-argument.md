---
title: How to create a function that accepts a single argument in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to create a function that accepts a single argument only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const unary = fn => arg => fn(arg);
```

### Example

```js {.wrap}
['1', '2', '3', '4', '5'].map(unary(parseInt));     // [1, 2, 3, 4, 5]
```