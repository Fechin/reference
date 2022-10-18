---
title: How to check if a number is a power of 2 in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a number is a power of 2 only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isPowerOfTwo = number => (number & (number - 1)) === 0;
```

### Example

```js {.wrap}
isPowerOfTwo(256);      // true
isPowerOfTwo(129);      // false
```