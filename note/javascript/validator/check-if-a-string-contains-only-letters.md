---
title: How to check if a string contains only letters in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a string contains only letters only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isAlpha = str => /^[A-Z]+$/i.test(str);
```

### Example

```js {.wrap}
isAlpha('helloworld');          // true
isAlpha('HelloWorld');          // true
isAlpha('hello world');         // false
isAlpha('0123456789');          // false
```