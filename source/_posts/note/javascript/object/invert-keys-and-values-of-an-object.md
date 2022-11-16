---
title: How to invert keys and values of an object in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to invert keys and values of an object only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const invert = obj => Object.keys(obj).reduce((res, k) => Object.assign(res, {[obj[k]]: k}), {});
```

### Or

```js {.wrap}
const invert = obj => Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
```

### Example

```js {.wrap}
invert({ a: '1', b: '2', c: '3' });     // { 1: 'a', 2: 'b', 3: 'c' }
```