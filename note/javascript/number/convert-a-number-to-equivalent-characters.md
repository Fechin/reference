---
title: How to convert a number to equivalent characters in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to convert a number to equivalent characters only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const toChars = n => `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;
```

### Example

```js {.wrap}
toChars(0);     // A
toChars(1);     // B
toChars(25);    // Z

toChars(26);     // AA
toChars(27);     // AB
toChars(51);     // AZ

toChars(701);   // ZZ
toChars(702);   // AAA
toChars(703);   // AAB
```