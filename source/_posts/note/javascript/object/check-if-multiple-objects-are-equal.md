---
title: How to check if multiple objects are equal in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to check if multiple objects are equal only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isEqual = (...objects) => objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]));
```

### Example

```js {.wrap}
isEqual({ foo: 'bar' }, { foo: 'bar' });    // true
isEqual({ foo: 'bar' }, { bar: 'foo' });    // false
```