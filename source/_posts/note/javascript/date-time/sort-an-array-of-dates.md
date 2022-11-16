---
title: How to sort an array of dates in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to sort an array of dates only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const sortDescending = arr => arr.sort((a, b) => a.getTime() > b.getTime());
const sortAscending = arr => arr.sort((a, b) => a.getTime() < b.getTime());
```
Parameters `arr` is an array of `Date` items.


