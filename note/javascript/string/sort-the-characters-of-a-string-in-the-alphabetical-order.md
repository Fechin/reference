---
title: How to sort the characters of a string in the alphabetical order in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to sort the characters of a string in the alphabetical order only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');
```

### Example

```js {.wrap}
sort('hello world');    // dehllloorw
```