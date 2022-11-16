---
title: How to convert a string to pascalcase in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to convert a string to pascalcase only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
```

### Example

```js {.wrap}
toPascalCase('hello world');    // 'HelloWorld'
toPascalCase('hello.world');    // 'HelloWorld'
toPascalCase('foo_bar-baz');    // FooBarBaz
```