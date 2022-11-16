---
title: How to check if the code is running in the browser in JavaScript
tags:
    - JavaScript
    - one-line
    - js
layout: note
---



In this Article we will go through how to check if the code is running in the browser only using single line of code in JavaScript.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isBrowser = typeof window === 'object' && typeof document === 'object';
```