---
title: How to repeat an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to repeat an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const repeat = (arr, n) => [].concat(...Array(n).fill(arr));
```
Parameters `arr` is an array.




### Or

```js {.wrap}
const repeat = (arr, n) => Array(n).fill(arr).flat();
```

### Or

```js {.wrap}
const repeat = (arr, n) => Array(arr.length * n).fill(0).map((_, i) => arr[i % arr.length]);
```

### Or

```js {.wrap}
const repeat = (arr, n) => Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
```

### Example

```js {.wrap}
repeat([1, 2, 3], 3);       // [1, 2, 3, 1, 2, 3, 1, 2, 3]
```