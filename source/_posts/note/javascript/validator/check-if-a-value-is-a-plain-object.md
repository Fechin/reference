---
title: How to check if a value is a plain object in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a value is a plain object only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isPlainObject = v => (!!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype));
```

### Example

```js {.wrap}
isPlainObject(null);                    // false
isPlainObject('hello world');           // false
isPlainObject([]);                      // false
isPlainObject(Object.create(null));     // false
isPlainObject(function() {});           // false

isPlainObject({});                      // true
isPlainObject({ a: '1', b: '2' });      // true
```