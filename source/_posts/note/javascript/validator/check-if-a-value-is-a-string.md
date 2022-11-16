---
title: How to check if a value is a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a value is a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isString = value => Object.prototype.toString.call(value) === '[object String]';
```

### Example

```js {.wrap}
isString('hello world');                // true
isString(new String('hello world'));    // true
isString(10);                           // false
```