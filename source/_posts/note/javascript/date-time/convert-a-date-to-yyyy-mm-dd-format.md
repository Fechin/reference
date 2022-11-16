---
title: How to convert a date to yyyy-mm-dd format in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to convert a date to yyyy-mm-dd format only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const formatYmd = date => date.toISOString().slice(0, 10);
```
Parameters `date` is a `Date` object.




### Example

```js {.wrap}
formatYmd(new Date());      // 2020-05-06
```
