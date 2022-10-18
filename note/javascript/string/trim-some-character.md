---
title: How to trim some character in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to trim some character only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const trim = (str, char) => str.split(char).filter(Boolean).join();
```

### Example

```js {.wrap}
trim('/hello world//', '/');        // hello world
trim('"hello world"', '"');         // hello world
trim('   hello world ', ' ');       // hello world
```