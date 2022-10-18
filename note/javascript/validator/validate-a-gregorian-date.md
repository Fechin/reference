---
title: How to validate a gregorian date in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to validate a gregorian date only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isValidDate = (m, d, y) => 0 <= m && m <= 11 && 0 < y && y < 32768 && 0 < d && d <= (new Date(y, m, 0)).getDate();
```
Parameters `m`: the month (zero-based index).


Parameters `d`: the day.


Parameters `y`: the year.


