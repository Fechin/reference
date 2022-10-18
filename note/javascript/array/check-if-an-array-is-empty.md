---
title: How to check if an array is empty in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to check if an array is empty only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;
```
Parameters `arr` is an array.




### Example

```js {.wrap}
isEmpty([]);            // true
isEmpty([1, 2, 3]);     // false
```