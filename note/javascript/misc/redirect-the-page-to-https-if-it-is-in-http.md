---
title: How to redirect the page to https if it is in http in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to redirect the page to https if it is in http only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const redirectHttps = () => (location.protocol === 'https:') ? {} : location.replace(`https://${location.href.split('//')[1]}`);
```

### Or

```js {.wrap}
const redirectHttps = () => (location.protocol === 'https:') ? {} : (location.protocol = 'https:');
```