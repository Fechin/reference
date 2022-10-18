---
title: How to check if a string contains only digits in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a string contains only digits only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isNumeric = str => !/[^0-9]/.test(str);
```

### Example

```js {.wrap}
isNumeric(2);               // true
isNumeric('23');            // true
isNumeric('00123');         // true

isNumeric('1.23');          // false
isNumeric('-Infinity');     // false
isNumeric('Infinity');      // false
isNumeric('NaN');           // false
```