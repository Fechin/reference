---
title: How to check if a number is even in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a number is even only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isEven = number => number % 2 === 0;
```

### Or

```js {.wrap}
const isEven = number => (number & 1) === 0;
```

### Or

```js {.wrap}
const isEven = number => !(number & 1);
```

### Or

```js {.wrap}
const isEven = number => Number.isInteger(number / 2);
```

### Example

```js {.wrap}
isEven(1);      // false
isEven(2);      // true
```
