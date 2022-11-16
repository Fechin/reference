---
title: How to shallow copy an object in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to shallow copy an object only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const shallowCopy = obj => Object.assign({}, obj);
```

### or

```js {.wrap}
const shallowCopy = obj => {...obj};
```