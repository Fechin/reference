---
title: How to replace multiple spaces with a single space in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to replace multiple spaces with a single space only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// Replace spaces, tabs and new line characters
const replaceSpaces = str => str.replace(/\s\s+/g, ' ');

// Only replace spaces
const replaceOnlySpaces = str => str.replace(/  +/g, ' ');
```

### Example

```js {.wrap}
replaceSpaces('this\n   is     \ta    \rmessage');  // 'this is a message'
```