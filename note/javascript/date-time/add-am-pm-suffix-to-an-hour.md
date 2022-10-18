---
title: How to add am pm suffix to an hour in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to add am pm suffix to an hour only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const suffixAmPm = h => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;
```
Parameters `h` is an hour number between 0 and 23.




### Example

```js {.wrap}
suffixAmPm(0);      // '12am'
suffixAmPm(5);      // '5am'
suffixAmPm(12);     // '12pm'
suffixAmPm(15);     // '3pm'
suffixAmPm(23);     // '11pm'
```