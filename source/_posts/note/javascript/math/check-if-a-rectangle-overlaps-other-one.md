---
title: How to check if a rectangle overlaps other one in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Math
layout: note
---



In this Article we will go through how to check if a rectangle overlaps other one only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// Returns true if `a` overlaps `b`
// (x1, y1) and (x2, y2) are top-left and bottom-right corners
const overlaps = (a, b) => (a.x1 < b.x2 && b.x1 < a.x2) || (a.y1 < b.y2 && b.y1 < a.y2);
```