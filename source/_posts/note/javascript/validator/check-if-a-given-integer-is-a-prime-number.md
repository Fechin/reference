---
title: How to check if a given integer is a prime number in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a given integer is a prime number only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isPrime = num => (num > 1) && Array(Math.floor(Math.sqrt(num)) - 1).fill(0).map((_, i) => i + 2).every(i => num % i !== 0);
```