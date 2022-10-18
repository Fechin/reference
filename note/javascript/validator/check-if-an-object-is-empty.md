---
title: How to check if an object is empty in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if an object is empty only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
```

### Or for enumerable property names only

```js {.wrap}
const isEmpty = obj => JSON.stringify(obj) === '{}';
```