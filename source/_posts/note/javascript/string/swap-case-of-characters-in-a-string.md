---
title: How to swap case of characters in a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to swap case of characters in a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const swapCase = str => str.split('').map(c => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())).join('');
```

### Example

```js {.wrap}
swapCase('Hello World');      // 'hELLO wORLD'
```