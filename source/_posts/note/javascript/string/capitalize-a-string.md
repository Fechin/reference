---
title: How to capitalize a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to capitalize a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
```

### Or

```js {.wrap}
const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;
```

### Example

```js {.wrap}
capitalize('hello world');      // 'Hello world'
```