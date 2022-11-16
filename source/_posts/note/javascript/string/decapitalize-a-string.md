---
title: How to decapitalize a string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to decapitalize a string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const decapitalize = str => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
```

### Or

```js {.wrap}
const decapitalize = ([first, ...rest]) => `${first.toLowerCase()}${rest.join('')}`;
```

### Example

```js {.wrap}
decapitalize('Hello world');    // 'hello world'
```