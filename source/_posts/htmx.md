---
title: HTMX
date: 2025-06-07 19:30:00
background: bg-[#ff5f4d]
tags:
  - frontend
  - javascript
  - htmx
categories:
  - Programming
intro: |
  A modern, minimal JavaScript library that allows you to create dynamic web interfaces using HTML attributes.
plugins:
  - copyCode
---

## Getting Started {.cols-3}

### CDN Import

```html
<script src="https://unpkg.com/htmx.org@1.9.2"></script>
```

### Basic Usage

```html
<button hx-get="/hello" hx-target="#result">Say Hi</button>
<div id="result"></div>
```

### Server Response

```html
<!-- /hello response -->
<p>Hello from server</p>
```

## Core Attributes {.cols-3}

### `hx-get`, `hx-post`, etc.

```html
<a hx-get="/page">Load Page</a>
<form hx-post="/submit"></form>
```

### `hx-target`

```html
<button hx-get="/data" hx-target="#box"></button>
<div id="box"></div>
```

### `hx-trigger`

```html
<input
  hx-get="/search"
  hx-trigger="keyup changed delay:300ms"
  hx-target="#results"
/>
```

## Swap & Out of Band {.cols-3}

### `hx-swap`

```html
<div hx-get="/frag" hx-swap="innerHTML"></div>
```

- `outerHTML`
- `innerHTML`
- `beforebegin`, `afterbegin`, etc.

### `hx-swap-oob`

```html
<div hx-swap-oob="true" id="msg"></div>
```

_Useful for global updates from partials._

### Swap Modifiers

```html
hx-swap="outerHTML transition:true swap:1s"
```

## Forms & Events {.cols-3}

### Auto POST on Submit

```html
<form hx-post="/submit" hx-target="#status">
  <input name="name" />
  <button type="submit">Send</button>
</form>
<div id="status"></div>
```

### `hx-include`

```html
<input id="user-id" name="id" />
<button hx-post="/update" hx-include="#user-id">Update</button>
```

### `hx-vals`

```html
<button hx-post="/save" hx-vals='{"id": 42, "active": true}'>Save</button>
```

## Advanced Features {.cols-3}

### Loading Indicator

```html
<button hx-get="/load" hx-indicator="#spinner">Load</button>
<div id="spinner" class="htmx-indicator">Loading...</div>
```

### `hx-push-url`

```html
<a hx-get="/page" hx-push-url="true">Go</a>
```

### Polling

```html
<div hx-get="/time" hx-trigger="every 5s"></div>
```

## Events & Extensions {.cols-3}

### Listen to Events

```js
document.body.addEventListener('htmx:afterSwap', (e) => {
  console.log('Swap complete');
});
```

### Event Hooks

- `htmx:beforeRequest`
- `htmx:afterSwap`
- `htmx:responseError`

### Extensions

```html
<script src="https://unpkg.com/htmx.org/dist/ext/json-enc.js"></script>
<form hx-post="/api" hx-ext="json-enc"></form>
```

## Example Use Case {.cols-2}

### Python Backend (Flask)

```python
@app.route("/hello")
def hello():
    return "<p>Hello, HTMX!</p>"
```

### HTML Client

```html
<button hx-get="/hello" hx-target="#msg">Click</button>
<div id="msg"></div>
```
