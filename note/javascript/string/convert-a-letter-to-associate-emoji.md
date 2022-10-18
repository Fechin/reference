---
title: How to convert a letter to associate emoji in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to convert a letter to associate emoji only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const letterToEmoji = c => String.fromCodePoint(c.toLowerCase().charCodeAt() + 127365);
```

### Example

```js {.wrap}
letterToEmoji('a');     // 🇦
letterToEmoji('b');     // 🇧
```