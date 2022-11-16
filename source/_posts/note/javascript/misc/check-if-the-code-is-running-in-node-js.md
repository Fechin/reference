---
title: How to check if the code is running in nodejs in JavaScript
tags:
    - JavaScript
    - one-line
    - js
layout: note
---



In this Article we will go through how to check if the code is running in nodejs only using single line of code in JavaScript.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
```