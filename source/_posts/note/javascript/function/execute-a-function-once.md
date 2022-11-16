---
title: How to execute a function once in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to execute a function once only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const once = fn => ((ran = false) => () => ran ? fn : (ran = !ran, fn = fn()))();
```

### Example

```js {.wrap}
let n = 0;
const incOnce = once(() => ++n);
incOnce();      // n = 1
incOnce();      // n = 1
incOnce();      // n = 1
```