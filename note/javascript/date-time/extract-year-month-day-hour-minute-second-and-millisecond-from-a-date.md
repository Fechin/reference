---
title: How to extract year, month, day, hour, minute, second and millisecond from a date in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to extract year, month, day, hour, minute, second and millisecond from a date only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const extract = date => date.toISOString().split(/[^0-9]/).slice(0, -1);
```
Parameters `date` is a `Date` object.


Parameters `extract` is an array of [year, month, day, hour, minute, second, millisecond].


