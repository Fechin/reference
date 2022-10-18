---
title: How to get the arrays of digits from a number in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to get the arrays of digits from a number only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const digitize = n => `${n}`.split('').map(v => parseInt(v, 10));
```

### Or

```js {.wrap}
const digitize = n => [...`${n}`].map(v => parseInt(v, 10));
```

### Example

```js {.wrap}
digitize(123);    // [1, 2, 3]
```