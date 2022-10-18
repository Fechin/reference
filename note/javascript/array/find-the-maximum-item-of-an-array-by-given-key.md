---
title: How to find the maximum item of an array by given key in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to find the maximum item of an array by given key only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const maxBy = (arr, key) => arr.reduce((a, b) => a[key] >= b[key] ? a : b, {});
```

### Example

```js {.wrap}
const people = [
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
];
maxBy(people, 'age');   // { name: 'Foo', age: 42 }
```