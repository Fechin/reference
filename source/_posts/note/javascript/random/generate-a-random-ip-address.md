---
title: How to generate a random ip address in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Random
layout: note
---



In this Article we will go through how to generate a random ip address only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const randomIp = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');
```

### Example

```js {.wrap}
randomIp();     // 175.89.174.131
```