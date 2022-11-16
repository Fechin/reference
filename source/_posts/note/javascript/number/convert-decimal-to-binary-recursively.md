---
title: How to convert decimal to binary recursively in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to convert decimal to binary recursively only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const decToBi = num => num === 0 ? 0 : num % 2 + 10 * decToBi(~~(num / 2));
```

### Example

```js {.wrap}
decToBi(10);      //1010
```
