---
title: How to generate a random uuid in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Random
layout: note
---



In this Article we will go through how to generate a random uuid only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const uuid = (a) => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
```