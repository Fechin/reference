---
title: How to check if a string is a hexadecimal color in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a string is a hexadecimal color only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isHexColor = color => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);
```

### Example

```js {.wrap}
isHexColor('#012');         // true
isHexColor('#A1B2C3');      // true
isHexColor('012');          // false
isHexColor('#GHIJKL');      // false
```