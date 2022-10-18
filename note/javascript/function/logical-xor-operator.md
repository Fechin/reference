---
title: How to logical xor operator in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to logical xor operator only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// returns `true` if one of the arguments is truthy and the other is falsy

const xor = (a, b) => (a && !b) || (!a && b);
```

### Or

```js {.wrap}
const xor = (a, b) => !(!a && !b) && !(a && b);
```

### Or

```js {.wrap}
const xor = (a, b) => Boolean(!a ^ !b);
```

### Example

```js {.wrap}
xor(true, true);        // false
xor(false, false);      // false
xor(true, false);       // true
xor(false, true);       // true
```