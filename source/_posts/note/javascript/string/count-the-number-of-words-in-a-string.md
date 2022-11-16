---
title: How to count the number of words in a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to count the number of words in a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const countWords = str => str.trim().split(/\s+/).length;
```

### Example

```js {.wrap}
countWords('Hello World');        // 2
countWords('Hello    World');     // 2
countWords('  Hello  World  ');   // 2
```