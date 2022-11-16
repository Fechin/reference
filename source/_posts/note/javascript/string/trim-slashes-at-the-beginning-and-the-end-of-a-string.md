---
title: How to trim slashes at the beginning and the end of a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to trim slashes at the beginning and the end of a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const trimSlashes = str => str.replace(/^\/+|\/+$/g, '');
```

### Or

```js {.wrap}
const trimSlashes = str => str.split('/').filter(Boolean).join('/');
```

### Example

```js {.wrap}
trimSlashes('//hello/world///');    // hello/world
```