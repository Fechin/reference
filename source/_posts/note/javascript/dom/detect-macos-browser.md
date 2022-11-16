---
title: How to detect macos browser in JavaScript
tags:
    - JavaScript
    - one-line
    - js
    - DOM
layout: note
---



In this Article we will go through how to detect macos browser only using single line of code in JavaScript.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```