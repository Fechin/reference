---
title: How to sort an object by its properties in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to sort an object by its properties only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const sort = obj => Object.keys(obj).sort().reduce((p, c) => (p[c] = obj[c], p), {});
```

### Example

```js {.wrap}
const colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#008000',
    blue: '#0000ff',
};
sort(colors);
/*
{
    black: '#000000',
    blue: '#0000ff',
    green: '#008000',
    red: '#ff0000',
    white: '#ffffff',
}
*/
```