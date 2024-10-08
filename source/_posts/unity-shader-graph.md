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
  - Shaders
intro: |
  This is a visual cheat-sheet for the Unity Shader Graph. This tool is used to create custom shaders material in Unity, a popular game engine.
---

## Shader Graph Nodes

### Basic Nodes

| Node          | Action                                    |  
| ------------- | ----------------------------------------- |  
| `Position`    | Provides vertex position                  |  
| `Normal`      | Supplies surface normal direction         |  
| `Time`        | Outputs time values                       |  
| `Multiply`    | Multiplies two values                     |  
| `Lerp`        | Linear interpolation between two values   |  
| `Step`        | Creates a step between two thresholds     |  

{.shortcuts}

### Math Nodes

| Node           | Action                                    |  
| -------------- | ----------------------------------------- |  
| `Add`          | Adds two values                          |  
| `Subtract`     | Subtracts one value from another          |  
| `Sin`          | Outputs sine of input                    |  
| `Cos`          | Outputs cosine of input                  |  
| `Power`        | Raises input to a power                  |  

{.shortcuts}

### Texture Nodes

| Node              | Action                                   |  
| ----------------- | ---------------------------------------- |  
| `Sample Texture`  | Retrieves color data from texture        |  
| `UV`              | Provides UV coordinates for texture      |  
| `Tiling Offset`   | Adjusts tiling and offset of texture     |  

{.shortcuts}

### Effects Nodes

| Node            | Action                                  |  
| --------------- | --------------------------------------- |  
| `Fresnel Effect`| Creates a glow effect on object edges   |  
| `Dissolve`      | Generates a dissolve transition effect  |  
| `Distortion`    | Warps object surface                    |  

{.shortcuts}

## Custom Function Node

### Steps to Create a Custom Function Node:

  **Step 1. Add Custom Function Node**  
  
  - Right-click in Shader Graph and choose **"Create Node"** > **"Custom Function"**.

  **Step 2. Configure Node**  
   - Set a name for the node and choose between **"String"** (inline code) or **"File"** (external HLSL file).

  **Step 3. Add Inputs/Outputs**  
   - Define inputs (e.g., float, vector) and outputs as needed.

  **Step 4. Write Shader Code**  
   - Enter the custom HLSL code in the appropriate field.

  **Step 5. Utilize the Node**  
   - Integrate the custom node into your shader graph for custom behavior.

## Also see {.cols-1}

- [Unity Shader Graph documentation](https://docs.unity3d.com/Manual/shader-graph-overview.html)  
  _(docs.unity3d.com)_