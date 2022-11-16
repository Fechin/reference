---
title: How to check if a point is inside a rectangle in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Math
layout: note
---



In this Article we will go through how to check if a point is inside a rectangle only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isInside = (point, rect) => point.x > rect.left && point.x < rect.right && point.y > rect.top && point.y < rect.bottom;
```