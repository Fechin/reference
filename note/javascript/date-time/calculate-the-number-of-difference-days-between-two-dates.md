---
title: How to calculate the number of difference days between two dates in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to calculate the number of difference days between two dates only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
```

### Example

```js {.wrap}
diffDays(new Date('2014-12-19'), new Date('2020-01-01'));   // 1839
```