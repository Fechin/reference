---
title: How to hide an element in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - DOM
layout: note
---



In this Article we will go through how to hide an element only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// Pick the method that is suitable for your use case
const hide = ele => ele.style.display = 'none';
```

### Or

```js {.wrap}
const hide = ele => ele.style.visibility = 'hidden';
```

### Or

```js {.wrap}
const hide = ele => ele.hidden = true;
```