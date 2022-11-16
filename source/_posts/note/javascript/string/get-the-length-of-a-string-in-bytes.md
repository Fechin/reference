---
title: How to get the length of a string in bytes in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to get the length of a string in bytes only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const bytes = str => new Blob([str]).size;
```

### Example

```js {.wrap}
bytes('hello world');       // 11
bytes('🎉');                // 4
```