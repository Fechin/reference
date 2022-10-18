---
title: How to replace all tab characters with spaces in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to replace all tab characters with spaces only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const replace = (str, numSpaces = 4) => str.replaceAll('\t', ' '.repeat(numSpaces));
```