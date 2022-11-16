---
title: How to insert given html before an element in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - DOM
layout: note
---



In this Article we will go through how to insert given html before an element only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html);
```