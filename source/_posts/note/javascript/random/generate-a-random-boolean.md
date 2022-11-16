---
title: How to generate a random boolean in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Random
layout: note
---



In this Article we will go through how to generate a random boolean only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const randomBoolean = () => Math.random() >= 0.5;
```