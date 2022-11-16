---
title: How to check if a date occurs in the current year in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a date occurs in the current year only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isCurrentYear = (date) => date.getUTCFullYear() === new Date().getUTCFullYear();
```
Parameters `date` is a Date object.


