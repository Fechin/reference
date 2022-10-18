---
title: How to clone an array in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Array
layout: note
---



In this Article we will go through how to clone an array only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const clone = arr => arr.slice(0);
```
Parameters `arr` is an array.




### Or

```js {.wrap}
const clone = arr => [...arr];
```

### Or

```js {.wrap}
const clone = arr => Array.from(arr);
```

### Or

```js {.wrap}
const clone = arr => arr.map(x => x);
```

### Or

```js {.wrap}
const clone = arr => JSON.parse(JSON.stringify(arr));
```

### Or

```js {.wrap}
const clone = arr => arr.concat([]);
```