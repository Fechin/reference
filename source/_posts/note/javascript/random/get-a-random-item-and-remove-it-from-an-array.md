---
title: How to get a random item and remove it from an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Random
layout: note
---



In this Article we will go through how to get a random item and remove it from an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const randomItem = arr => arr.splice((Math.random() * arr.length) | 0, 1);
```

### Example

```js {.wrap}
const arr = [1, 3, 5, 7, 9];
randomItem(arr);    // 7
                    // arr = [1, 3, 5, 9]
```