---
title: How to check if all array elements are equal to a given value in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if all array elements are equal to a given value only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isEqual = (arr, value) => arr.every(item => item === value);
```

### Or

```js {.wrap}
// Ends earlier for false arrays
const isEqual = (arr, value) => !arr.some(item => item !== value);
```

### Example

```js {.wrap}
isEqual(['foo', 'foo'], 'foo');     // true
isEqual(['foo', 'bar'], 'foo');     // false
isEqual(['bar', 'bar'], 'foo');     // false
```