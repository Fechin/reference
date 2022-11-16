---
title: How to count by the properties of an array of objects in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to count by the properties of an array of objects only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const countBy = (arr, prop) => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});
```

### Example

```js {.wrap}
countBy([
    { branch: 'audi', model: 'q8', year: '2019' },
    { branch: 'audi', model: 'rs7', year: '2020' },
    { branch: 'ford', model: 'mustang', year: '2019' },
    { branch: 'ford', model: 'explorer', year: '2020' },
    { branch: 'bmw', model: 'x7', year: '2020' },
], 'branch');

// { 'audi': 2, 'ford': 2, 'bmw': 1 }
```