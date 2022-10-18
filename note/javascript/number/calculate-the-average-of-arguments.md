---
title: How to calculate the average of arguments in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to calculate the average of arguments only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
```

### Example

```js {.wrap}
average(1, 2, 3, 4);    // 2.5
```