---
title: How to flatten an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to flatten an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const flat = arr => [].concat.apply([], arr.map(a => Array.isArray(a) ? flat(a) : a));
```

### Or

```js {.wrap}
const flat = arr => arr.reduce((a, b) => Array.isArray(b) ? [...a, ...flat(b)] : [...a, b], []);
```

### Or

```js {.wrap}
// See the browser compatibility at https://caniuse.com/#feat=array-flat
const flat = arr => arr.flat();
```

### Example

```js {.wrap}
flat(['cat', ['lion', 'tiger']]);   // ['cat', 'lion', 'tiger']
```