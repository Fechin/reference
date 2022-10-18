---
title: How to check if a flat array has duplicate values in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a flat array has duplicate values only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const hasDuplicateValues = arr => new Set(arr).size !== arr.length;
```

### Example

```js {.wrap}
hasDuplicateValues(['h', 'e', 'l', 'l', 'o']);      // true
hasDuplicateValues(['w', 'o', 'r', 'd']);           // false
```