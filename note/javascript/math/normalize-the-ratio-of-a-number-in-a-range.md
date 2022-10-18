---
title: How to normalize the ratio of a number in a range in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Math
layout: note
---



In this Article we will go through how to normalize the ratio of a number in a range only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const normalizeRatio = (value, min, max) => (value - min) / (max - min);
```