---
title: How to calculate fibonacci numbers in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to calculate fibonacci numbers only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const fibo = (n, memo = {}) => memo[n] || (n <= 2 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)));
```

### Example

```js {.wrap}
fibo(1);    // 1
fibo(2);    // 1
fibo(3);    // 2
fibo(4);    // 3
fibo(5);    // 5
fibo(6);    // 8
```