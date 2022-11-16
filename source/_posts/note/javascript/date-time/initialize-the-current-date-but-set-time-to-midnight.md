---
title: How to initialize the current date but set time to midnight in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to initialize the current date but set time to midnight only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const midnightOfToday = () => new Date(new Date().setHours(0, 0, 0, 0));
```