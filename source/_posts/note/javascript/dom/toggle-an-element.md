---
title: How to toggle an element in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - DOM
layout: note
---



In this Article we will go through how to toggle an element only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const toggle = ele => (ele.style.display = (ele.style.display === 'none') ? 'block' : 'none');
```

### Or

```js {.wrap}
const toggle = ele => ele.hidden = !ele.hidden;
```