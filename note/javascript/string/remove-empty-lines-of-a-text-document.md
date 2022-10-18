---
title: How to remove empty lines of a text document in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to remove empty lines of a text document only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const removeEmptyLines = str => str.split(/\r?\n/).filter(line => line.trim() !== '').join('\n');
```

### Example

```js {.wrap}
removeEmptyLines(`red

green
blue

yellow`);

/* Output */
/*
red
green
blue
yellow
*/
```