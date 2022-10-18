---
title: How to multiply arguments in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to multiply arguments only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const mul = (...args) => args.reduce((a, b) => a * b);
```

### Example

```js {.wrap}
mul(1, 2, 3, 4);    // 24
```