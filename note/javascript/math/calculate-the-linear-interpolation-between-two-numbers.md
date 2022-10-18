---
title: How to calculate the linear interpolation between two numbers in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Math
layout: note
---



In this Article we will go through how to calculate the linear interpolation between two numbers only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const lerp = (a, b, amount) => (1 - amount) * a + amount * b;
```