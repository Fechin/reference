---
title: How to partially apply a function in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to partially apply a function only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const partial = (fn, ...a) => (...b) => fn(...a, ...b);
```

### Example

```js {.wrap}
const sum = (x, y) => x + y;
const inc = partial(sum, 1);
inc(9);     // 10
```