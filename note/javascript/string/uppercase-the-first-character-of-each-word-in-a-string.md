---
title: How to uppercase the first character of each word in a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to uppercase the first character of each word in a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const uppercaseWords = str => str.split(' ').map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');
```

### Or

```js {.wrap}
const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
```

### Example

```js {.wrap}
uppercaseWords('hello world');      // 'Hello World'
```