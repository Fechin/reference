---
title: How to check if a string contains lower case characters in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a string contains lower case characters only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const containsLowerCase = str => str !== str.toUpperCase();
```

### Example

```js {.wrap}
containsLowerCase('Hello World');   // true
containsLowerCase('HELLO WORLD');   // false
```