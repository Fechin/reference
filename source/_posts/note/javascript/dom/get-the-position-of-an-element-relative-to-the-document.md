---
title: How to get the position of an element relative to the document in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - DOM
layout: note
---



In this Article we will go through how to get the position of an element relative to the document only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getPosition = ele => (r = ele.getBoundingClientRect(), { left: r.left + window.scrollX, top: r.top + window.scrollY });
```

### Example

```js {.wrap}
getPosition(document.body);     // { left: 0, top: 0 }
```