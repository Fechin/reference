---
title: How to convert the name of an excel column to number in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to convert the name of an excel column to number only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getIndex = col => col.split('').reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);
```

### Example

```js {.wrap}
getIndex('A');      // 1
getIndex('B');      // 2
getIndex('C');      // 3
getIndex('Z');      // 26

getIndex('AA');     // 27
getIndex('AB');     // 28
getIndex('AC');     // 29
getIndex('AZ');     // 52

getIndex('AAA');    // 703
getIndex('AAB');    // 704
```