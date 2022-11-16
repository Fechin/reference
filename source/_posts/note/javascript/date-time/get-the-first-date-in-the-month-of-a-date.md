---
title: How to get the first date in the month of a date in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to get the first date in the month of a date only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getFirstDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1);
```