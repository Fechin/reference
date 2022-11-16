---
title: How to insert an element before other one in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - DOM
layout: note
---



In this Article we will go through how to insert an element before other one only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle);
```

### Or

```js {.wrap}
const insertBefore = (ele, anotherEle) => anotherEle.insertAdjacentElement('beforebegin', ele);
```