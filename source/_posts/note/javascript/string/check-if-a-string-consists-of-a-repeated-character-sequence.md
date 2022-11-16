---
title: How to check if a string consists of a repeated character sequence in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to check if a string consists of a repeated character sequence only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const consistsRepeatedSubstring = str => `${str}${str}`.indexOf(str, 1) !== str.length;
```

### Example

```js {.wrap}
consistsRepeatedSubstring('aa');            // true
consistsRepeatedSubstring('aaa');           // true
consistsRepeatedSubstring('ababab');        // true
consistsRepeatedSubstring('abc');           // false
```