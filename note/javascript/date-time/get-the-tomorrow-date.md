---
title: How to get the tomorrow date in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to get the tomorrow date only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const tomorrow = (d => new Date(d.setDate(d.getDate() + 1)))(new Date);
```

### Or

```js {.wrap}
const tomorrow = new Date((new Date()).valueOf() + 1000 * 60 * 60 * 24);
```