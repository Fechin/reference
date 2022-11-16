---
title: How to convert snake_case to camelcase in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to convert snake_case to camelcase only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const snakeToCamel = str => str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substr(1));
```

### Example

```js {.wrap}
snakeToCamel('HELLO_world');    // 'helloWorld'
```