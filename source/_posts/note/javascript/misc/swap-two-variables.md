---
title: How to swap two variables in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to swap two variables only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
[a, b] = [b, a];
```

### Or

```js {.wrap}
a = [b, b = a][0];
```

### Or

```js {.wrap}
a = (x => x)(b, b = a);
```

### Or

```js {.wrap}
// (only works with numbers)
a = b + (b = a, 0);

a = b * (b = a, 1);
```