---
title: How to remove spaces from a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to remove spaces from a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const removeSpaces = str => str.replace(/\s/g, '');
```

### Example

```js {.wrap}
removeSpaces('hel lo wor ld');      // 'helloworld'
```