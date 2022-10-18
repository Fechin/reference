---
title: How to delay the evaluation of a function in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to delay the evaluation of a function only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// returns a new version of `fn` that returns values as lazy evaluable
const thunkfy = fn => (...args) => () => fn(...args);
```

### Example

```js {.wrap}
const heavyComputation = x => doStuff(x);
const unnecessarySlow = manyThings.map(heavyComputation)
    .find(result => result.criteria);
const probablyFaster = manyThings.map(thunkfy(heavyComputation))
    .find(thunk => thunk().criteria);
```