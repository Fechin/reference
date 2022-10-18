---
title: How to sort lines of a text document in the alphabetical order in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to sort lines of a text document in the alphabetical order only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const sortLines = str => str.split(/\r?\n/).sort().join('\n');

// Reverse the order
const reverseSortedLines = str => str.split(/\r?\n/).sort().reverse().join('\n');
```

### Example

```js {.wrap}
sortLines(`Thaddeus Mullen
Kareem Marshall
Ferdinand Valentine
Hasad Lindsay
Mufutau Berg
Knox Tyson
Kasimir Fletcher
Colton Sharp
Adrian Rosales
Theodore Rogers`);

/* Output */
/*
Adrian Rosales
Colton Sharp
Ferdinand Valentine
Hasad Lindsay
Kareem Marshall
Kasimir Fletcher
Knox Tyson
Mufutau Berg
Thaddeus Mullen
Theodore Rogers
*/
```