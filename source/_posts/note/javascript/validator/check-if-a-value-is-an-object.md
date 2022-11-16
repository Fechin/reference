---
title: How to check if a value is an object in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a value is an object only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isObject = v => (v !== null && typeof v === 'object');
```

### Example

```js {.wrap}
isObject(null);             // false
isObject('hello world');    // false

isObject({});               // true
isObject([]);               // true 
```