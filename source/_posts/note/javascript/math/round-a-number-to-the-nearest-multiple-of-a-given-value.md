---
title: How to round a number to the nearest multiple of a given value in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Math
layout: note
---



In this Article we will go through how to round a number to the nearest multiple of a given value only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const roundNearest = (value, nearest) => Math.round(value / nearest) * nearest;
```

### Example

```js {.wrap}
roundNearest(100, 30);      // 90
roundNearest(200, 30);      // 210
roundNearest(200, 40);      // 200
```