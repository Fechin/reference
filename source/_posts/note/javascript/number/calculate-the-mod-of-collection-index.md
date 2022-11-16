---
title: How to calculate the mod of collection index in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to calculate the mod of collection index only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const mod = (a, b) => ((a % b) + b) % b;
```

### Example

```js {.wrap}
mod(-1, 5);     // 4
mod(3, 5);      // 3
mod(6, 5);      // 1
```