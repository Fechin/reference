---
title: How to check if an array contains a value matching some criterias in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if an array contains a value matching some criterias only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const contains = (arr, criteria) => arr.some(v => criteria(v));
```

### Or

```js {.wrap}
const contains = (arr, criteria) => arr.some(criteria);
```

### Or

```js {.wrap}
const contains = (arr,criteria) => arr.filter(criteria).length > 0;
```

### Example

```js {.wrap}
contains([10, 20, 30], v => v > 25 );               // true
contains([10, 20, 30], v => v > 100 || v < 15 );    // true
contains([10, 20, 30], v => v > 100 );              // false
```
