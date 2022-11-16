---
title: How to check if a value is a generator function in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to check if a value is a generator function only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isGeneratorFunction = v => Object.prototype.toString.call(v) === '[object GeneratorFunction]';
```

### Example

```js {.wrap}
isGeneratorFunction(function() {});     // false
isGeneratorFunction(function*() {});    // true
```