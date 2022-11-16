---
title: How to calculate the midpoint between two points in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Math
layout: note
---



In this Article we will go through how to calculate the midpoint between two points only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const midpoint = (p1, p2) => [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];
```