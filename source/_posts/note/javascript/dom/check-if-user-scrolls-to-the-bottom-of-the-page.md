---
title: How to check if user scrolls to the bottom of the page in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - DOM
layout: note
---



In this Article we will go through how to check if user scrolls to the bottom of the page only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isAtBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
```