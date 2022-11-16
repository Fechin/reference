---
title: How to memoize a function in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to memoize a function only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const memoize = fn => ((cache = {}) => arg => cache[arg] || (cache[arg] = fn(arg)))();
```

### Example

```js {.wrap}
// Calculate Fibonacci numbers
const fibo = memoize(n => n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2));

fibo(1);    // 1
fibo(2);    // 1
fibo(3);    // 2
fibo(4);    // 3
fibo(5);    // 5
fibo(6);    // 8
```