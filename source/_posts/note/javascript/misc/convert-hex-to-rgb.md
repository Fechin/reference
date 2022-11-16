---
title: How to convert hex to rgb in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to convert hex to rgb only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
```

### Example

```js {.wrap}
hexToRgb('#00ffff');    // [0, 255, 255] 
hexToRgb('#0ff');       // [0, 255, 255]
```