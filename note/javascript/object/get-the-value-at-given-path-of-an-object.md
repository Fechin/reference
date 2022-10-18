---
title: How to get the value at given path of an object in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to get the value at given path of an object only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getValue = (path, obj) => path.split('.').reduce((acc, c) => acc && acc[c], obj);
```

### Example

```js {.wrap}
getValue('a.b', { a: { b: 'Hello World' } });   // 'Hello World';
```