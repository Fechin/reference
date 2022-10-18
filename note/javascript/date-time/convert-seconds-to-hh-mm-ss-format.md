---
title: How to convert seconds to hh:mm:ss format in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to convert seconds to hh:mm:ss format only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const formatSeconds = s => new Date(s * 1000).toISOString().substr(11, 8);
```
Parameters `s` is number of seconds.




### Or

```js {.wrap}
const formatSeconds = s => (new Date(s * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
```

### Or

```js {.wrap}
const formatSeconds = s => [parseInt(s / 60 / 60), parseInt(s / 60 % 60), parseInt(s % 60)].join(':').replace(/\b(\d)\b/g, '0$1');
```

### Example

```js {.wrap}
formatSeconds(200);     // 00:03:20
formatSeconds(500);     // 00:08:20
```