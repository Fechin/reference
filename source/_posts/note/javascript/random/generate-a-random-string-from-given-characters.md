---
title: How to generate a random string from given characters in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Random
layout: note
---



In this Article we will go through how to generate a random string from given characters only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const generateString = (length, chars) => Array(length).fill('').map((v) => chars[Math.floor(Math.random() * chars.length)]).join('');
```

### Example

```js {.wrap}
generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
```