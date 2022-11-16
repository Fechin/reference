---
title: How to immutably rename object keys in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to immutably rename object keys only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const renameKeys = (keysMap, obj) => Object.keys(obj).reduce((acc, key) => ({ ...acc, ...{ [keysMap[key] || key]: obj[key] }}), {});
```

### Example

```js {.wrap}
const obj = { a: 1, b: 2, c: 3 };
const keysMap = { a: 'd', b: 'e', c: 'f' };
renameKeys(keysMap, obj);       // { d: 1, e: 2, f: 3 }
```