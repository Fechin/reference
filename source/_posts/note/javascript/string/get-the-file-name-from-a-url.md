---
title: How to get the file name from a url in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to get the file name from a url only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const fileName = url => url.substring(url.lastIndexOf('/') + 1);
```

### Example

```js {.wrap}
fileName('http://domain.com/path/to/document.pdf');     // 'document.pdf'
```