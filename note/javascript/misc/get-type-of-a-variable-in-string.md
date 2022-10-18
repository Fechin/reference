---
title: How to get type of a variable in string in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to get type of a variable in string only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getTypeOf = obj => Object.prototype.toString.call(obj).match(/\[object (.*)\]/)[1];
```

### Example

```js {.wrap}
getTypeOf('hello world');           // String
getTypeOf(1000);                    // Number
getTypeOf(Infinity);                // Number
getTypeOf(true);                    // Boolean
getTypeOf(Symbol());                // Symbol
getTypeOf(null);                    // Null
getTypeOf(undefined);               // Undefined
getTypeOf({});                      // Object
getTypeOf([]);                      // Array
getTypeOf(/[a-z]/g);                // RegExp
getTypeOf(new Date(2021));          // Date
getTypeOf(new Error());             // Error
getTypeOf(function() {});           // Function
getTypeOf((a, b) => a + b);         // Function
getTypeOf(async () => {});          // AsyncFunction
getTypeOf(document);                // HTMLDocument
```