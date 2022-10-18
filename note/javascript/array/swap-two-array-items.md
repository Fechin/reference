---
title: How to swap two array items in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to swap two array items only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const swapItems = (a, i, j) => a[i] && a[j] && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)] || a;
```
Parameters `i` must be less than `j`.



### Example

```js {.wrap}
swapItems([1, 2, 3, 4, 5], 1, 4);   // [1, 5, 3, 4, 2] 
```