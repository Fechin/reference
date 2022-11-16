---
title: How to flip the arguments of a function in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to flip the arguments of a function only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// Reverse the order of arguments
const flip = fn => (...args) => fn(...args.reverse());

// For binary functions
const flip = fn => (b, a) => fn(a, b);
```

### Or for curried functions

```js {.wrap}
const flip = fn => b => a => fn(a)(b);
```

### Example

```js {.wrap}
const isParent = (parent, child) => parent.children.includes(child);
const isChild = flip(isParent);
```