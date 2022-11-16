---
title: How to find the length of the longest string in an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to find the length of the longest string in an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const findLongest = words => Math.max(...(words.map(el => el.length)));
```

### Example

```js {.wrap}
findLongest(['always','look','on','the','bright','side','of','life']);  // 6
```