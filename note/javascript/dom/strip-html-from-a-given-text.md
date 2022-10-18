---
title: How to strip html from a given text in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - DOM
layout: note
---



In this Article we will go through how to strip html from a given text only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
```