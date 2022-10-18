---
title: How to reverse the order of lines of a text in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to reverse the order of lines of a text only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const reverseLines = str => str.split(/\r?\n/).reverse().join('\n');
```

### Example

```js {.wrap}
reverseLines(`one
two
three`);

/* Output */
/*
three
two
one
*/
```