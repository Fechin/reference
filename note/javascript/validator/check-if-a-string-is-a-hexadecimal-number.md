---
title: How to check if a string is a hexadecimal number in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a string is a hexadecimal number only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isHexadecimal = str => /^[A-F0-9]+$/i.test(str);
```

### Or

```js {.wrap}
const isHexadecimal = str => str.split('').every(c => '0123456789ABCDEFabcdef'.indexOf(c) !== -1);
```

### Example

```js {.wrap}
isHexadecimal('123');       // true
isHexadecimal('A1B2C3');    // true
isHexadecimal('#123');      // false
```