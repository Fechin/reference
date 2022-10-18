---
title: How to check if two strings are anagram in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to check if two strings are anagram only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
```

### Example

```js {.wrap}
areAnagram('listen', 'silent');         // true
areAnagram('they see', 'the eyes');     // true
areAnagram('node', 'deno');             // true
```