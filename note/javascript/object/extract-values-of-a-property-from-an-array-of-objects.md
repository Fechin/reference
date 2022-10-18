---
title: How to extract values of a property from an array of objects in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to extract values of a property from an array of objects only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const pluck = (objs, property) => objs.map(obj => obj[property]);
```

### Example

```js {.wrap}
pluck([
    { name: 'John', age: 20 },
    { name: 'Smith', age: 25 },
    { name: 'Peter', age: 30 },
], 'name');         // ['John', 'Smith', 'Peter']
```