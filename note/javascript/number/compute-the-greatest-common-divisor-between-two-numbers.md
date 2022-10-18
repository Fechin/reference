---
title: How to compute the greatest common divisor between two numbers in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to compute the greatest common divisor between two numbers only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
```

### Example

```js {.wrap}
gcd(10, 15);    // 5
```