---
title: How to check if a value is base58 encoded in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a value is base58 encoded only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// It doesn't accept the I, O, l characters 
const isBase58 = value => /^[A-HJ-NP-Za-km-z1-9]*$/.test(value);
```