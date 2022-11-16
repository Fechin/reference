---
title: How to check if a year is leap year in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Validator
layout: note
---



In this Article we will go through how to check if a year is leap year only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isLeapYear = year => (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
```

### Or

```js {.wrap}
// Get the number of days in February
const isLeapYear = year => new Date(year, 1, 29).getDate() === 29;
```