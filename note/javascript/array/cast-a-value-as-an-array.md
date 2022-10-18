---
title: How to cast a value as an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to cast a value as an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const castArray = value => Array.isArray(value) ? value : [value];
```

### Example

```js {.wrap}
castArray(1);               // [1]
castArray([1, 2, 3]);       // [1, 2, 3]
```