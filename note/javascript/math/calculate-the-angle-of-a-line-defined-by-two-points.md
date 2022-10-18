---
title: How to calculate the angle of a line defined by two points in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Math
layout: note
---



In this Article we will go through how to calculate the angle of a line defined by two points only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// In radians
const radiansAngle = (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x);

// In degrees
const degreesAngle = (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
```