---
title: How to convert rgb color to hex in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to convert rgb color to hex only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const rgbToHex = (red, green, blue) => `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
```

### Or

```js {.wrap}
const rgbToHex = (red, green, blue) => `#${[red, green, blue].map(v => v.toString(16).padStart(2, '0')).join('')}`;
```

### Example

```js {.wrap}
rgbToHex(0, 255, 255);      // '#00ffff' 
```