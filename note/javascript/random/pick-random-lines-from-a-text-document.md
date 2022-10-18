---
title: How to pick random lines from a text document in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Random
layout: note
---



In this Article we will go through how to pick random lines from a text document only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const randomLines = (str, count) => str.split(/\r?\n/).reduce((p, _, __, arr) => (p[0] < count) ? [p[0] + 1, p[1].concat(arr.splice(Math.random() * arr.length | 0, 1))] : p, [0, []])[1];
```

### Example

```js {.wrap}
randomLines(`one
two
three
four
five`, 2);

// ['one', 'four']
```