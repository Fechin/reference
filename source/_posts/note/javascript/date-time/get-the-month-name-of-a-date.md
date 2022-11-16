---
title: How to get the month name of a date in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to get the month name of a date only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getMonthName = date => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',' November', 'December'][date.getMonth()];
```
Parameters `date` is a Date object.


