---
title: How to make the first character of a string lowercase in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to make the first character of a string lowercase only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const lowercaseFirst = str => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
```

### Example

```js {.wrap}
lowercaseFirst('Hello World');      // 'hello World'
```