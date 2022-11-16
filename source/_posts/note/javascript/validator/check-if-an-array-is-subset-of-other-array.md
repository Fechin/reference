---
title: How to check if an array is subset of other array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if an array is subset of other array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// Check if `b` is subset of `a`
const isSubset = (a, b) => (new Set(b)).size === (new Set(b.concat(a))).size;
```

### Or

```js {.wrap}
const isSubset = (a, b) => b.join("|").includes(a.join("|"));
```

### Example

```js {.wrap}
isSubset([1, 2], [1, 2, 3, 4]);     // true
isSubset([1, 2, 5], [1, 2, 3, 4]);  // false
isSubset([6], [1, 2, 3, 4]);        // false
```