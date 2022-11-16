---
title: How to compose functions from left to right in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to compose functions from left to right only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// Compose functions from left to right
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
```

### Example

```js {.wrap}
const lowercase = str => str.toLowerCase();
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const reverse = str => str.split('').reverse().join('');

const fn = pipe(lowercase, capitalize, reverse);

// We will execute `lowercase`, `capitalize` and `reverse` in order
fn('Hello World') === 'dlrow olleH';
```