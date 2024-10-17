---
title: Unity Shader Graph
date: 2024-08-10 12:15:05
background: bg-[#7c7c7c]
label:
tags:
  - unity
  - shader
  - computer graphics
  - visual effects
categories:
  - Programming
intro: |
  This is a visual cheat-sheet for the Unity Shader Graph. This tool is used to create custom shaders material in Unity, a popular game engine.
---

## Shader Graph Nodes {.cols-2}

<code>We are using <yel>**SAIT**</yel> to indicate the output type is "same as the input type".</code> {.col-span-2}

## 1. Attributes {.cols-2}

### Positioning {.row-span-2}

<yel>**Position**</yel> - provides vertex position
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | /     | No inputs               |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3`| Provides vertex position|
  
  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Normal**</yel> - supplies surface normal direction
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | /     | No inputs               |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3`| Provides surface normal |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**World Position**</yel> - returns the object's world space position
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | /     | No inputs               |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | World space position   |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Object Position**</yel> - returns the object's local space position
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | /     | No inputs               |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | Local space position   |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Screen Position**</yel> - returns the object's screen space position
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | /     | No inputs               |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Screen space position  |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Camera Position**</yel> - returns the camera's world space position
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | /     | No inputs               |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | Camera world space position |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Timing

<yel>**Time**</yel> - outputs various time-related values
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | /     | No inputs               |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Time (T) - The total elapsed time since the start of the shader |
  | `Float`  | Sin Time (T/8π) - A sine wave based on time                    |
  | `Float`  | Cos Time (T/8π) - A cosine wave based on time                  |
  | `Float`  | Delta Time - Time passed between the previous frame and the current frame |

  {.left-text}

{.shortcuts .marker-round .cols-2}


## 2. Math Operations {.cols-2}

### Basic Math 

<yel>**Add**</yel> - adds two values
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float` <br> `Vector` | First value  |
  | `Float` <br> `Vector` | Second value |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | SAIT | Sum of the two inputs |

  {.left-text}
  
{.shortcuts .marker-round .cols-2}

<yel>**Subtract**</yel> - subtracts one value from another
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float` <br> `Vector` | Minuend      |
  | `Float` <br> `Vector` | Subtrahend   |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | SAIT | Difference of the two inputs |

  {.left-text}
  
{.shortcuts .marker-round .cols-2}

<yel>**Multiply**</yel> - multiplies two values
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float` <br> `Vector` <br> `Matrix` | First value |
  | `Float` <br> `Vector` <br> `Matrix` | Second value|

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | SAIT | The product of the two inputs |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Advanced Math {.row-span-2}

<yel>**Power**</yel> - raises input to a power
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Base                   |
  | `Float`  | Exponent               |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Result of base raised to the power of the exponent |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Sqrt**</yel> - square root of input
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Input value             |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Square root of the input |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Abs**</yel> - outputs absolute value
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float` <br> `Vector` | Input value  |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | SAIT | Absolute value of the input |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Dot Product**</yel> - calculates dot product between two vectors
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` <br> `Vector4` | First vector |
  | `Vector3` <br> `Vector4` | Second vector|

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- |  ---------------------- |
  |`Float`  | Dot product result |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Cross Product**</yel> - calculates cross product between two vectors
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | First vector           |
  | `Vector3` | Second vector          |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | Cross product result |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Trigonometry

<yel>**Sin**</yel> - outputs sine of input
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Input in radians        |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Sine of the input       |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Cos**</yel> - outputs cosine of input
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Input in radians        |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`  | Cosine of the input     |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Interpolation {.row-span-2}

<yel>**Lerp**</yel> - linear interpolation between two values
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float` <br> `Vector`  | Start value             |
  | `Float` <br> `Vector`  | End value               |
  | `Float` <br> `Vector`  | Interpolation factor (T)|

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | SAIT  | Interpolated result     |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Step**</yel> - creates a step between two thresholds
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float` <br> `Vector`  | Threshold               |
  | `Float` <br> `Vector`  | Input                   |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | SAIT  | Step result             |

  {.left-text}

{.shortcuts .marker-round .cols-2}


## 3. Color Processing {.cols-2}

### Basic Color Manipulation 

<yel>**Color**</yel> - provides a constant color value
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | /     | No inputs               |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | RGBA color value       |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Add Color**</yel> - adds two color values
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | First color            |
  | `Vector4` | Second color           |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Sum of the two colors  |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Multiply Color**</yel> - multiplies two color values
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | First color            |
  | `Vector4` | Second color           |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Product of the two colors |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Lerp Color**</yel> - interpolates between two colors
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Start color            |
  | `Vector4` | End color              |
  | `Float`   | Interpolation factor (T)|

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Interpolated color     |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Color Adjustment {.row-span-2}

<yel>**Saturation**</yel> - adjusts the saturation of input color
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Input color            |
  | `Float`   | Saturation factor      |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Adjusted color         |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Contrast**</yel> - adjusts contrast of input color
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Input color            |
  | `Float`   | Contrast factor        |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Adjusted color         |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Hue**</yel> - shifts the hue of the input color
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Input color            |
  | `Float`   | Hue shift amount       |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Color with shifted hue |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Invert Colors**</yel> - inverts the input color
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Input color            |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Inverted color         |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Replace Color**</yel> - replaces a specific color in the input with a new color
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Input color            |
  | `Vector4` | Target color           |
  | `Vector4` | Replacement color      |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Color with replaced values |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**White Balance**</yel> - adjusts the white balance of input color
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Input color            |
  | `Float`   | Temperature value      |
  | `Float`   | Tint value             |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Adjusted color         |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Channel Operations

<yel>**Channel Mixer**</yel> - modifies color channels independently
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Input color            |
  | `Float`   | Red channel multiplier |
  | `Float`   | Green channel multiplier |
  | `Float`   | Blue channel multiplier |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Modified color         |

  {.left-text}

{.shortcuts .marker-round .cols-2}

## 4. Texture Processing {.cols-2}

### Sampling 

<yel>**Sample Texture**</yel> - retrieves color data from texture
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Texture (sampler)` | Texture input  |
  | `Vector2` | UV coordinates         |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Color data from the texture |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**UV**</yel> - provides UV coordinates for texture mapping
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | /     | No inputs               |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector2` | UV coordinates         |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Manipulation {.row-span-2}

<yel>**Tiling Offset**</yel> - adjusts tiling and offset of texture
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector2` | Tiling values          |
  | `Vector2` | Offset values          |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector2` | Modified UV coordinates |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Distortion**</yel> - warps the surface of the object
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`   | Distortion strength    |
  | `Vector2` | UV coordinates         |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector2` | Warped UV coordinates  |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Parallax**</yel> - simulates depth using parallax mapping
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | Texture (sampler) | Input texture  |
  | `Vector2` | UV coordinates         |
  | `Float`   | Depth value            |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector2` | Adjusted UV coordinates|

  {.left-text}

{.shortcuts .marker-round .cols-2}

## 5. Effects {.cols-2}

### Visual Effects {.row-span-2}

<yel>**Fresnel Effect**</yel> - creates a glow effect on object edges
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | View direction         |
  | `Float`   | Power of the effect    |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Float`   | Fresnel effect value   |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Dissolve**</yel> - generates a dissolve transition effect

- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Texture (sampler)` | Input texture  |
  | `Float`   | Dissolve threshold     |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector4` | Dissolve effect output |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Reflection {.row-span-2}

<yel>**Reflection**</yel> - reflects based on surface normal direction
- **Inputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | Incident direction     |
  | `Vector3` | Surface normal         |

  {.left-text}

- **Outputs**
  - |-|-|
  | -------- | ---------------------- |
  | `Vector3` | Reflected direction    |

  {.left-text}

{.shortcuts .marker-round .cols-2}



## Custom Function Node

### Steps to Create a Custom Function Node {.col-span-2}

- **Step 1: Add Custom Function Node in Shader Graph**

  - Right-click in Shader Graph and choose **"Create Node"** > **"Custom Function"**.
  - Choose between **"String"** (for inline HLSL code) or **"File"** (for an external HLSL file).

- **Step 2: Configure the Node in Shader Graph**
  - Set the name of the node.
  - If using **"File"**, ensure the external HLSL file name exactly matches the function name defined in the HLSL file. This ensures the function is correctly referenced in the Shader Graph pipeline.
  
    <yel>**Example**</yel>: If the file is named `CustomFunction.hlsl`, the function inside it should also be named `CustomFunction`.

- **Step 3: Add Inputs/Outputs in Shader Graph**
  - Define the required `Inputs` and `Outputs` for the custom function in Shader Graph. These will automatically generate ports for you to connect other nodes.
  
    <yel>**Example**</yel>:
    - **Inputs**: `Float` (time), `Vector3` (position)
    - **Outputs**: `Vector3` (new position)
    
    In the custom HLSL code, the `in` and `out` parameters correspond to these inputs and outputs:
    - `in` represents the data coming into the function (e.g., `time`, `position`).
    - `out` defines the return value (e.g., modified `position`).

- **Step 4: Write HLSL Code**

  - If using the **"String"** option:
    - Directly write the HLSL code inside the custom function node editor in Shader Graph.
    - Ensure that the `in` and `out` parameters match the inputs and outputs you defined in Shader Graph.

    - <yel>**Example of inline code**</yel> (using **"String"** mode):

      ```cpp
      float3 CustomPosition(in float time, in float3 position, out float3 newPosition) {
        newPosition = position + float3(sin(time), cos(time), 0.0);
        return newPosition;
      }
      ```
  
  - If using the **"File"** option:
    - Write the HLSL code in an external `.hlsl` file and reference the file in Shader Graph.

    - <yel>**Example of an external HLSL file**</yel> (using **"File"** mode):

      1. **1. Create an HLSL file** named `CustomPosition.hlsl`.

      2. **2. Write the custom function** inside the file. The `in` and `out` parameters should match the Shader Graph inputs and outputs.

      ```cpp
      float3 CustomPosition(in float time, in float3 position, out float3 newPosition) {
        newPosition = position + float3(sin(time), cos(time), 0.0);
        return newPosition;
      }
      ```

      3. **3. Save the file** in your project directory, for example, `Assets/Shaders/CustomPosition.hlsl`.

      4. **4. Link the file** in Shader Graph:
       - In the Custom Function Node, switch to **"File"** mode and reference `CustomPosition.hlsl`.
  
- **Step 5: Use the Node in Shader Graph**
  - Connect the custom function node’s input ports to other nodes, such as `Time` and `Position`, to feed data into the custom function.
  - Connect the output port to apply the function result in the Shader Graph pipeline.

  - <yel>**Example Pipeline**</yel>:

    - **Inputs**: `Time` (as a float) and `Position` (as a vector)
    - **Outputs**: `Modified Position` (vector with new position)
  
    This would make the custom node update an object's position based on time in the shader.

{.marker-timeline .shortcuts}


## Also see {.cols-1}

- [Unity Shader Graph documentation](https://docs.unity3d.com/Manual/shader-graph-overview.html)  _(docs.unity3d.com)_  
- [Tianle Yuan's Unity Visual Effect notes](https://yuantianle.github.io/11_Game_Development/Unity/)
  _(yuantianle.com)_
