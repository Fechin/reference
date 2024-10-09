---
title: 🕹️ Unity Shader Graph
date: 2024-08-10 12:15:05
background: bg-[#7c7c7c]
label:
tags:
  - unity
  - shader
  - computer graphics
  - visual effects
categories:
  - Shaders
intro: |
  This is a visual cheat-sheet for the Unity Shader Graph. This tool is used to create custom shaders material in Unity, a popular game engine.
---

## Shader Graph Nodes {.cols-2}

<code>We are using <yel>**SAIT**</yel> to indicate the output type is "same as the input type".</code> {.col-span-2}

### Basic Nodes 

<yel>Position</yel> - provides vertex position {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | None     | No inputs               |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3`| Provides vertex position|
{.shortcuts .marker-round .cols-2}

<yel>Normal</yel> - supplies surface normal direction {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | None     | No inputs               |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3`| Provides surface normal |
{.shortcuts .marker-round .cols-2}

<yel>Time</yel> - outputs time values {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | None     | No inputs               |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Outputs time values     |
{.shortcuts .marker-round .cols-2}

<yel>Multiply</yel> - multiplies two values {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`, `Vector`, `Matrix` | First value |
  | `Float`, `Vector`, `Matrix` | Second value|
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | SAIT | The product of the two inputs |
{.shortcuts .marker-round .cols-2}

<yel>Lerp</yel> - linear interpolation between two values {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Start value             |
  | `Float`  | End value               |
  | `Float`  | Interpolation factor (T)|
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Interpolated result     |
{.shortcuts .marker-round .cols-2}

<yel>Step</yel> - creates a step between two thresholds {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Threshold               |
  | `Float`  | Input                   |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Step result             |
{.shortcuts .marker-round .cols-2}

### Math Nodes

<yel>Add</yel> - adds two values {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float` or `Vector` | First value  |
  | `Float` or `Vector` | Second value |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | SAIT | Sum of the two inputs |
{.shortcuts .marker-round .cols-2}

<yel>Subtract</yel> - subtracts one value from another {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float` or `Vector` | Minuend      |
  | `Float` or `Vector` | Subtrahend   |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | SAIT | Difference of the two inputs |
{.shortcuts .marker-round .cols-2}

<yel>Sin</yel> - outputs sine of input {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Input in radians        |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Sine of the input       |
{.shortcuts .marker-round .cols-2}

<yel>Cos</yel> - outputs cosine of input {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Input in radians        |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Cosine of the input     |
{.shortcuts .marker-round .cols-2}

<yel>Power</yel> - raises input to a power {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Base                   |
  | `Float`  | Exponent               |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Result of base raised to the power of the exponent |
{.shortcuts .marker-round .cols-2}

<yel>Sqrt</yel> - square root of input {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Input value             |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Square root of the input |
{.shortcuts .marker-round .cols-2}

<yel>Abs</yel> - outputs absolute value {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float` or `Vector` | Input value  |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | SAIT | Absolute value of the input |
{.shortcuts .marker-round .cols-2}



### Texture Nodes

<yel>Sample Texture</yel> - retrieves color data from texture {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | Texture (sampler) | Texture input  |
  | `Vector2` | UV coordinates         |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Color data from the texture |
{.shortcuts .marker-round .cols-2}

<yel>UV</yel> - provides UV coordinates for texture mapping {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | None     | No inputs               |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector2` | UV coordinates         |
{.shortcuts .marker-round .cols-2}

<yel>Tiling Offset</yel> - adjusts tiling and offset of texture {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector2` | Tiling values          |
  | `Vector2` | Offset values          |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector2` | Modified UV coordinates |
{.shortcuts .marker-round .cols-2}



### Effects Nodes

<yel>Fresnel Effect</yel> - creates a glow effect on object edges {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | View direction         |
  | `Float`   | Power of the effect    |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`   | Fresnel effect value   |
{.shortcuts .marker-round .cols-2}

<yel>Dissolve</yel> - generates a dissolve transition effect {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | Texture (sampler) | Input texture  |
  | `Float`   | Dissolve threshold     |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Dissolve effect output |
{.shortcuts .marker-round .cols-2}

<yel>Distortion</yel> - warps the surface of the object {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`   | Distortion strength    |
  | `Vector2` | UV coordinates         |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector2` | Warped UV coordinates  |
{.shortcuts .marker-round .cols-2}

<yel>Reflection</yel> - reflects based on surface normal direction {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | Incident direction     |
  | `Vector3` | Surface normal         |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | Reflected direction    |
{.shortcuts .marker-round .cols-2}



### Advanced Nodes

<yel>World Position</yel> - returns the object's world space position {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | None     | No inputs               |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | World space position   |
{.shortcuts .marker-round .cols-2}

<yel>Object Position</yel> - returns the object's local space position {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | None     | No inputs               |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | Local space position   |
{.shortcuts .marker-round .cols-2}

<yel>Screen Position</yel> - returns the object's screen space position {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | None     | No inputs               |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Screen space position  |
{.shortcuts .marker-round .cols-2}

<yel>Parallax</yel> - simulates depth using parallax mapping {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | Texture (sampler) | Input texture  |
  | `Vector2` | UV coordinates         |
  | `Float`   | Depth value            |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector2` | Adjusted UV coordinates|
{.shortcuts .marker-round .cols-2}

<yel>Camera Position</yel> - returns the camera's world space position {.cols-2}
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | None     | No inputs               |
- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | Camera world space position |
{.shortcuts .marker-round .cols-2}


### Custom Function Node

#### Steps to Create a Custom Function Node:

- **Add Custom Function Node**

  - Right-click in Shader Graph and choose **"Create Node"** > **"Custom Function"**.

- **Configure the Node**
  - Set a name and choose between **"String"** (inline code) or **"File"** (external HLSL file).

- **Add Inputs/Outputs**: Define inputs (e.g., float, vector) and outputs. Example:
    - **Inputs**: Float (time), Vector3 (position)
    - **Outputs**: Vector3 (new position)

- **Write Shader Code**: Enter the custom HLSL code. Example:

    ```hlsl
    float3 CustomPosition(float time, float3 position) {
      return position + float3(sin(time), cos(time), 0.0);
    }
    ```

- **Use the Node**: Integrate the custom node into your shader graph.

{.marker-timeline}

## Also see {.cols-1}

- [Unity Shader Graph documentation](https://docs.unity3d.com/Manual/shader-graph-overview.html)  _(docs.unity3d.com)_  
- [Tianle Yuan's Unity Visual Effect notes](https://yuantianle.github.io/11_Game_Development/Unity/)
  _(yuantianle.com)_
