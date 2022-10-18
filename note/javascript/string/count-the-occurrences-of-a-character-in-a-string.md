---
title: How to count the occurrences of a character in a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to count the occurrences of a character in a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const countOccurrences = (str, char) => [...str].reduce((a, v) => (v === char ? a + 1 : a), 0);
```

### Or

```js {.wrap}
const countOccurrences = (str, char) => str.split('').reduce((a, v) => (v === char ? a + 1 : a), 0);
```

### Or

```js {.wrap}
const countOccurrences = (str, char) => [...str].filter(item => item === char).length;
```

### Or

```js {.wrap}
const countOccurrences = (str, char) => str.split('').filter(item => item === char).length;
```

### Example

```js {.wrap}
countOccurrences('a.b.c.d.e', '.');     // 4
```