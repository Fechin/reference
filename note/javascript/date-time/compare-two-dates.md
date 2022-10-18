---
title: How to compare two dates in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to compare two dates only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const compare = (a, b) => a.getTime() > b.getTime();
```
Parameters `a` and `b` are `Date` instances.



### Example

```js {.wrap}
compare(new Date('2020-03-30'), new Date('2020-01-01'));    // true
```