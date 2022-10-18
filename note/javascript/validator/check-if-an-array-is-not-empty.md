---
title: How to check if an array is not empty in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if an array is not empty only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isNotEmpty = arr => Array.isArray(arr) && Object.keys(arr).length > 0;
```

### Example

```js {.wrap}
isNotEmpty([]);             // false
isNotEmpty([1, 2, 3]);      // true
```