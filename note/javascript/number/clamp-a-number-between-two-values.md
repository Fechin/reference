---
title: How to clamp a number between two values in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to clamp a number between two values only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));
```

### Example

```js {.wrap}
clamp(199, 10, 25);     // 25
```