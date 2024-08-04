---
title: HTML Canvas
date: 2024-05-28 22:16:42
background: bg-[#cc5534]
tags:
  - web
categories:
  - Programming
intro: |
  This HTML  Canvas quick reference cheat sheet lists the common HTML5  Canvas design tags in readable layout.
plugins:
  - copyCode
---

## Getting Started

### Basic Setup

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Canvas Example</title>
  </head>
  <body>
    <canvas
      id="myCanvas"
      width="500"
      height="400"
      style="border:1px solid #000000;"
    ></canvas>
    <script src="script.js"></script>
  </body>
</html>
```

### Getting the Context

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

## Drawing Shapes

### Rectangles

```js
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 150, 100); // x, y, width, height

ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.strokeRect(200, 10, 150, 100); // x, y, width, height

ctx.clearRect(15, 15, 30, 30); // x, y, width, height
```

## Paths

### Lines

```js
ctx.beginPath();
ctx.moveTo(50, 50); // Starting point
ctx.lineTo(200, 50); // Ending point
ctx.lineTo(200, 200); // Next line ending point
ctx.closePath(); // Connects the end point to the start point
ctx.stroke();
```

### Circles

```js
ctx.beginPath();
ctx.arc(150, 150, 75, 0, 2 * Math.PI); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();
```

### Arcs

```js
ctx.beginPath();
ctx.arc(150, 150, 75, 0, Math.PI); // x, y, radius, startAngle, endAngle
ctx.stroke();
```

## Bezier and Quadratic Curves

### Quadratic Curve

```js
ctx.beginPath();
ctx.moveTo(50, 250);
ctx.quadraticCurveTo(200, 100, 400, 250); // cpX, cpY, endX, endY
ctx.stroke();
```

### Bezier Curve

```js
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.bezierCurveTo(150, 100, 350, 500, 450, 300); // cp1X, cp1Y, cp2X, cp2Y, endX, endY
ctx.stroke();
```

### Text

```js
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Hello Canvas", 10, 50); // text, x, y

ctx.strokeText("Hello Canvas", 10, 100); // text, x, y
```

### Images

```js
const img = new Image();
img.src = "path/to/image.jpg";
img.onload = () => {
  ctx.drawImage(img, 10, 10); // img, x, y
  ctx.drawImage(img, 50, 50, 100, 100); // img, x, y, width, height
  ctx.drawImage(img, 100, 100, 100, 100, 150, 150, 200, 200); // img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
};
```

## Transformations

### Translation

```js
ctx.translate(100, 100); // x, y
ctx.fillRect(0, 0, 50, 50);
```

### Rotation

```js
ctx.rotate((Math.PI / 180) * 45); // Angle in radians
ctx.fillRect(100, 100, 50, 50);
```

### Scaling

```js
ctx.scale(2, 2); // x, y
ctx.fillRect(50, 50, 50, 50);
```

## Gradients

### Linear Gradient

```js
const linearGradient = ctx.createLinearGradient(0, 0, 200, 0); // x0, y0, x1, y1
linearGradient.addColorStop(0, "red");
linearGradient.addColorStop(1, "blue");
ctx.fillStyle = linearGradient;
ctx.fillRect(10, 10, 200, 100);
```

### Radial Gradient

```js
const radialGradient = ctx.createRadialGradient(75, 50, 5, 90, 60, 100); // x0, y0, r0, x1, y1, r1
radialGradient.addColorStop(0, "red");
radialGradient.addColorStop(1, "blue");
ctx.fillStyle = radialGradient;
ctx.fillRect(10, 10, 200, 100);
```

### Patterns

```js
const img = new Image();
img.src = "path/to/image.jpg";
img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat"); // 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
```

### Shadows

```js
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;

ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);
```

## Compositing

### Global Alpha

```js
ctx.globalAlpha = 0.5;
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);

ctx.fillStyle = "blue";
ctx.fillRect(150, 150, 100, 100);
```

### Global Composite Operation

```js
ctx.globalCompositeOperation = "source-over"; // Default
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);

ctx.globalCompositeOperation = "destination-over";
ctx.fillStyle = "blue";
ctx.fillRect(150, 150, 100, 100);
```

### Animations

```js
let x = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(x, 100, 50, 50);
  x += 2;
  requestAnimationFrame(draw);
}
draw();
```

## Also read

- [MDN doc ](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
