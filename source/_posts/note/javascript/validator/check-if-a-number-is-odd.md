---
title: How to check if a number is odd in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a number is odd only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isOdd = number => number % 2 !== 0;
```

### Or

```js {.wrap}
const isOdd = number => !!(number & 1);
```

### Or

```js {.wrap}
const isOdd = number => !Number.isInteger(number / 2);
```

### Example

```js {.wrap}
isOdd(1);   // true
isOdd(2);   // false
```
