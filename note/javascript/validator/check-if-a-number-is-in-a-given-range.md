---
title: How to check if a number is in a given range in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a number is in a given range only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const inRange = (num, a, b, threshold = 0) => (Math.min(a, b) - threshold <= num && num <= Math.max(a, b) + threshold);
```

### Example

```js {.wrap}
inRange(10, 5, 15);         // true
inRange(10, 5, 6);          // false
inRange(10, 15, 5);         // true
inRange(-10, -5, -15);      // true
```