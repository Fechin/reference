---
title: How to pick a subset of properties of an object in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to pick a subset of properties of an object only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const pick = (obj, keys) => Object.keys(obj).filter(k => keys.includes(k)).reduce((res, k) => Object.assign(res, {[k]: obj[k]}), {});
```

### Example

```js {.wrap}
pick({ a: '1', b: '2', c: '3' }, ['a', 'b']);   // { a: '1', b: '2' }
```