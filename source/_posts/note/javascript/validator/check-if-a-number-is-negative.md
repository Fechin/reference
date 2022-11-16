---
title: How to check if a number is negative in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a number is negative only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isNegative = number => Math.sign(number) === -1;
```

### Or

```js {.wrap}
const isNegative = number => number < 0;
```

### Example

```js {.wrap}
isNegative(-3);     // true
isNegative(8);      // false
```
