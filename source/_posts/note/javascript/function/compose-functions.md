---
title: How to compose functions in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to compose functions only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// Compose functions from right to left
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
```

### Example

```js {.wrap}
const lowercase = str => str.toLowerCase();
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const reverse = str => str.split('').reverse().join('');

const fn = compose(reverse, capitalize, lowercase);

// We will execute `lowercase`, `capitalize` and `reverse` in order
fn('Hello World') === 'dlrow olleH';
```