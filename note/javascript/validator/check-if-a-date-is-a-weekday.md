---
title: How to check if a date is a weekday in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a date is a weekday only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isWeekday = (date = new Date()) => date.getDay() % 6 !== 0;
```
Parameters `date` is a Date object.


