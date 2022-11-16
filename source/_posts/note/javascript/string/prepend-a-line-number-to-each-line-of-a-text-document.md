---
title: How to prepend a line number to each line of a text document in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to prepend a line number to each line of a text document only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const prependNumbers = str => str.split(/\r?\n/).map((line, i) => `${(i + 1).toString().padStart(2, ' ')} ${line}`).join('\n');
```

### Example

```js {.wrap}
prependNumbers(`one
two
three
four`);

/* Output */
/*
1 one
2 two
3 three
4 four
*/
```