---
title: How to check if a string contains upper case characters in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a string contains upper case characters only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const containsUpperCase = str => str !== str.toLowerCase();
```

### Example

```js {.wrap}
containsUpperCase('Hello World');   // true
containsUpperCase('hello world');   // false
```