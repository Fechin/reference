---
title: How to get the number of days in given month in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to get the number of days in given month only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
```
Parameters `month` is zero-based index.


