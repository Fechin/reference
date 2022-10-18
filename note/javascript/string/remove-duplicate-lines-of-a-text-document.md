---
title: How to remove duplicate lines of a text document in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to remove duplicate lines of a text document only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const removeDuplicateLines = str => Array.from(new Set(str.split(/\r?\n/))).join('\n');
```

### Example

```js {.wrap}
removeDuplicateLines(`one
three
two
three
one
four`);

/* Output */
/*
one
three
two
four
*/
```