---
title: How to convert camelcase to kebab-case and vice versa in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to convert camelcase to kebab-case and vice versa only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const kebabToCamel = str => str.replace(/-./g, m => m.toUpperCase()[1]);

const camelToKebab = str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
```

### Example

```js {.wrap}
kebabToCamel('background-color');   // 'backgroundColor'
camelToKebab('backgroundColor');    // 'background-color'
```