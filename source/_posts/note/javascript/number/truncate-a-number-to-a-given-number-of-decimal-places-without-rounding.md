---
title: How to truncate a number to a given number of decimal places without rounding in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to truncate a number to a given number of decimal places without rounding only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const toFixed = (n, fixed) => `${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];
```

### Or

```js {.wrap}
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
```

### Example

```js {.wrap}
toFixed(25.198726354, 1);       // 25.1
toFixed(25.198726354, 2);       // 25.19
toFixed(25.198726354, 3);       // 25.198
toFixed(25.198726354, 4);       // 25.1987
toFixed(25.198726354, 5);       // 25.19872
toFixed(25.198726354, 6);       // 25.198726
```