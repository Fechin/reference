---
title: How to check if a value is an async function in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to check if a value is an async function only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isAsyncFunction = v => Object.prototype.toString.call(v) === '[object AsyncFunction]';
```

### Example

```js {.wrap}
isAsyncFunction(function() {});         // false
isAsyncFunction(function*() {});        // false
isAsyncFunction(async function() {});   // true
```