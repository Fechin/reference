---
title: How to calculate the distance between two points in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Math
layout: note
---



In this Article we will go through how to calculate the distance between two points only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const distance = (p1, p2) => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
```