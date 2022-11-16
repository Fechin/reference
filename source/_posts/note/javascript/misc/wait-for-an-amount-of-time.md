---
title: How to wait for an amount of time in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to wait for an amount of time only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
```