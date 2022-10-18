---
title: How to check if a string is a palindrome in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to check if a string is a palindrome only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isPalindrome = str => str === str.split('').reverse().join('');
```

### Example

```js {.wrap}
isPalindrome('abc');        // false
isPalindrom('abcba');       // true
```