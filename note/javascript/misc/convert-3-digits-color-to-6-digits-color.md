---
title: How to convert 3 digits color to 6 digits color in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to convert 3 digits color to 6 digits color only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const toFullHexColor = color => `#${(color.startsWith('#') ? color.slice(1) : color).split('').map(c => `${c}${c}`).join('')}`;
```

### Example

```js {.wrap}
toFullHexColor('123');      // '#112233'
toFullHexColor('#123');     // '#112233'
toFullHexColor('#abc');     // '#aabbcc'
```