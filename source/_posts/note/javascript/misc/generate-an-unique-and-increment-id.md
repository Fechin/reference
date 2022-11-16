---
title: How to generate an unique and increment id in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to generate an unique and increment id only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const uid = (() => (id = 0, () => id++))();
```

### Example

```js {.wrap}
uid();          // 0
uid();          // 1
uid();          // 2
uid();          // 3
```