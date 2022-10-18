---
title: How to uncurry a function in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to uncurry a function only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const uncurry = (fn, n = 1) => (...args) => (acc => args => args.reduce((x, y) => x(y), acc))(fn)(args.slice(0, n));
```
Parameters `fn` is a curried function.


Parameters `n` is the depth of parameters.




### Example

```js {.wrap}
const sum = a => b => c => a + b + c;
uncurry(sum, 1)(1)(2)(3);       // 6
uncurry(sum, 2)(1, 2)(3);       // 6
uncurry(sum, 3)(1, 2, 3);       // 6
```