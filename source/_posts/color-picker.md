---
title: Color Picker
date: 2025-07-01 18:28:43
background: bg-[#2a6387]
tags:
  - html
  - color
categories:
  - Toolkit
intro: The Color Picker  cheat sheet provides you basic color info and  choices 
plugins:
  - copyCode
---

## Getting Started 


### Color Basics {.col-span-3}


| **Category**                     | **Description**                                                                                                                                                                                                                                                                                |
|:---------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Color Models**                 | **RGB**: Red, Green, Blue – additive model used in screens. <br> **HEX**: Hexadecimal color codes, e.g., #FFFFFF. <br> **HSL**: Hue, Saturation, Lightness – intuitive for color adjustments. <br> **HSV**: Hue, Saturation, Value – similar to HSL but with different brightness handling.    |
| **Color Terminology**            | **Saturation**: Intensity or purity of a color. <br> **Hue**: The color type (e.g., red, blue). <br> **Lightness**: Brightness or darkness of a color. <br> **Opacity**: Transparency level of a color, often defined as alpha in RGBA.                                                        |
| **Color Representation Formats** | **HEX**: `#RRGGBB` or `#RRGGBBAA` (with alpha). <br> **RGB**: `rgb(255, 255, 255)` <br> **RGBA**: `rgba(255, 255, 255, 0.5)` <br> **HSL**: `hsl(120, 100%, 50%)` <br> **HSLA**: `hsla(120, 100%, 50%, 0.5)`                                                                                    |



### Main Frameworks {.col-span-3}

| **Framework**    | **Color Notation / Syntax**                                                                                                                                                     | **Description**                                             | **Documentation Link**                                                                     |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|:-------------------------------------------------------------------------------------------|
| **CSS**          | `color: red;` <br> `color: #ff0000;` <br> `color: rgb(255, 0, 0);` <br> `color: rgba(255, 0, 0, 0.5);` <br> `color: hsl(0, 100%, 50%);` <br> `color: hsla(0, 100%, 50%, 0.5);`  | Standard CSS color properties and formats.                  | [CSS Color Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/color)          |
| **SASS/SCSS**    | `$color: #ff0000;` <br> `color: $color;`                                                                                                                                        | Variables for colors, can use same formats as CSS.          | [SASS Color Documentation](https://sass-lang.com/documentation/values/colors)              |
| **Tailwind CSS** | `class="bg-red-500"` <br> `class="text-green-300"`                                                                                                                              | Utility classes with predefined color shades.               | [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)                     |
| **Bootstrap**    | `class="text-primary"` <br> `class="bg-success"`                                                                                                                                | Named color classes for quick styling.                      | [Bootstrap Colors](https://getbootstrap.com/docs/5.0/getting-started/introduction/#colors) |
| **Material UI**  | `style={{ color: 'primary' }}` or theme palette                                                                                                                                 | Uses theme palette, can override with specific color codes. | [Material UI Color](https://mui.com/customization/color/)                                  |


## Color Palette

### Tailwind Palette {.col-span-3}

<widget name="color-palette-tailwind"/>


## Gradient CSS 

### Gradient Maker {.col-span-3}

<widget name="gradient-maker"/>


| Parameter     | Description                       | Example                                        |
|:--------------|:----------------------------------|:-----------------------------------------------|
| **to right**  | Gradient goes from left to right  | `linear-gradient(to right, #ff7e5f, #feb47b)`  |
| **to left**   | Gradient goes from right to left  | `linear-gradient(to left, #ff7e5f, #feb47b)`   |
| **to bottom** | Gradient goes from top to bottom  | `linear-gradient(to bottom, #ff7e5f, #feb47b)` |
| **to top**    | Gradient goes from bottom to top  | `linear-gradient(to top, #ff7e5f, #feb47b)`    |
| **deg**       | Specify an angle in degrees       | `linear-gradient(45deg, ...)`                  |

