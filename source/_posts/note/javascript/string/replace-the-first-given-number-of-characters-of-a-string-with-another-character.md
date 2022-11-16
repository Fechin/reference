---
title: How to replace the first given number of characters of a string with another character in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to replace the first given number of characters of a string with another character only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const mask = (str, num, mask) => `${str}`.slice(num).padStart(`${str}`.length, mask);
```

### Example

```js {.wrap}
mask(1234567890, 3, '*');       // ***4567890
```