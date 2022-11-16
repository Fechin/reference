---
title: How to check if an element is a descendant of another in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - DOM
layout: note
---



In this Article we will go through how to check if an element is a descendant of another only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isDescendant = (child, parent) => parent.contains(child);
```