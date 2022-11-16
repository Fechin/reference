---
title: How to round a number to a given number of digits in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to round a number to a given number of digits only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

### Example

```js {.wrap}
round(1.234567, 3);     // 1.235
round(1.234567, 4);     // 1.2346
```