---
title: How to check if the touch events are supported in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - DOM
layout: note
---



In this Article we will go through how to check if the touch events are supported only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const touchSupported = () => ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
```