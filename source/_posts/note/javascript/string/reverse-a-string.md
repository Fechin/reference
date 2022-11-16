---
title: How to reverse a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to reverse a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const reverse = str => str.split('').reverse().join('');
```

### Or

```js {.wrap}
const reverse = str => [...str].reverse().join('');
```

### Or

```js {.wrap}
const reverse = str => str.split('').reduce((rev, char)=> `${char}${rev}`, '');
```

### Or

```js {.wrap}
const reverse = str => (str === '') ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`;
```

### Example

```js {.wrap}
reverse('hello world');     // 'dlrow olleh'
```