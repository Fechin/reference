---
title: How to create an empty function in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to create an empty function only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const noop = () => {};
```

### Or

```js {.wrap}
const noop = Function();
// calling Function() might be detected as using eval by some security tools
```
