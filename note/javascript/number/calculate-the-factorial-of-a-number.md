---
title: How to calculate the factorial of a number in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to calculate the factorial of a number only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
```

### Example

```js {.wrap}
factorial(2);   // 2
factorial(3);   // 6
factorial(4);   // 24
factorial(5);   // 120
factorial(6);   // 720
```