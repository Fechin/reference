---
title: How to zip multiple arrays in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to zip multiple arrays only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const zip = (...arr) => Array.from({ length: Math.max(...arr.map(a => a.length)) }, (_, i) => arr.map(a => a[i]));
```

### Example

```js {.wrap}
zip(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]);   // [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]

/*
Does it look like a zipper?
        a 1
        b 2
       c   3
      d     4
     e       5
*/
```