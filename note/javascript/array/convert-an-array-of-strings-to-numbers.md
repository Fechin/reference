---
title: How to convert an array of strings to numbers in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to convert an array of strings to numbers only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const toNumbers = arr => arr.map(Number);
```

### Or

```js {.wrap}
const toNumbers = arr => arr.map(x => +x);
```

### Example

```js {.wrap}
toNumbers(['2', '3', '4']);     // [2, 3, 4]
```