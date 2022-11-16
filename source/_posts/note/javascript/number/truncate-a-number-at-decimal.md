---
title: How to truncate a number at decimal in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to truncate a number at decimal only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const truncate = n => ~~n;
```

### Example

```js {.wrap}
truncate(25.198726354);         // 25
truncate(-25.198726354);        // -25
```