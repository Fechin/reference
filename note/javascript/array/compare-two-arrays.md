---
title: How to compare two arrays in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to compare two arrays only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
```
Parameters `a` and `b` are arrays.



### Or

```js {.wrap}
const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
```

### Example

```js {.wrap}
isEqual([1, 2, 3], [1, 2, 3]);      // true
isEqual([1, 2, 3], [1, '2', 3]);    // false
```