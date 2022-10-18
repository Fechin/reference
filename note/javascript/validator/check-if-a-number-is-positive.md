---
title: How to check if a number is positive in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a number is positive only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isPositive = number => Math.sign(number) === 1;
```

### Example

```js {.wrap}
isPositive(3);      // true
isPositive(-8);     // false
```