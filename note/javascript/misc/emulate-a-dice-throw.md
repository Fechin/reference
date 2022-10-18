---
title: How to emulate a dice throw in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to emulate a dice throw only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const throwdice = () => ~~(Math.random() * 6) + 1;
```

### Example

```js {.wrap}
throwdice();    // 4 
throwdice();    // 1 
throwdice();    // 6 
```