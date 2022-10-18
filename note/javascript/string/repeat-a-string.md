---
title: How to repeat a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to repeat a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const repeat = (str, numberOfTimes) => str.repeat(numberOfTimes);
```

### Or

```js {.wrap}
const repeat = (str, numberOfTimes) => Array(numberOfTimes + 1).join(str);
```
