---
title: How to detect dark mode in JavaScript
tags:
    - JavaScript
    - one-line
    - js
layout: note
---



In this Article we will go through how to detect dark mode only using single line of code in JavaScript.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```