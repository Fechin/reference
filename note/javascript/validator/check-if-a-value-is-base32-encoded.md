---
title: How to check if a value is base32 encoded in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a value is base32 encoded only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isBase32 = value => value.length % 8 === 0 && /^[A-Z2-7]+=*$/.test(value);
```