---
title: How to get the total number of days in a year in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to get the total number of days in a year only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const numberOfDays = year => (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) ? 366 : 365;
```

### Or

```js {.wrap}
const numberOfDays = year => new Date(year, 1, 29).getDate() === 29 ? 366 : 365;
```