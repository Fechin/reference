---
title: How to create an empty map that does not have properties in JavaScript
tags:
    - JavaScript
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to create an empty map that does not have properties only using single line of code in JavaScript.
<br/>
<br/>
Let's define this short function:

The following `map` has `__proto__` property
```js {.wrap}
const map = Object.create(null);
```

The following `map` doesn't have any properties
```js {.wrap}
const map = {};
```