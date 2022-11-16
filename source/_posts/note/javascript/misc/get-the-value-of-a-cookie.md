---
title: How to get the value of a cookie in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to get the value of a cookie only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
```

### Example

```js {.wrap}
cookie('_ga');      // GA1.2.825309271.1581874719
```