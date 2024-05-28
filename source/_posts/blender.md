---
title: Blender
date: 2022-11-23 16:23:31.700590
background: bg-[#e48040]
label:
tags:
  -
  -
categories:
  - Keyboard Shortcuts
intro: |
  A visual cheat-sheet for the 187 keyboard shortcuts found in Blender
---

## Keyboard Shortcuts {.cols-2}

### Universal

| Shortcut            | Action                                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `Esc`               | Cancels Blender functions without changes                                                                                     |
| `Space`             | Open the toolbox                                                                                                              |
| `Tab`               | Start or quit edit mode                                                                                                       |
| `F1`                | Loads a Blender file, changes the window to a file window                                                                     |
| `Shift` `F1`        | Appends parts from other files, or loads as library data                                                                      |
| `F2`                | Writes a Blender file, changes the window to a file window                                                                    |
| `Shift` `F2`        | Exports the scene as a DXF file                                                                                               |
| `Ctrl` `F2`         | Exports the scene as a VRML1 file                                                                                             |
| `F3`                | Writes a picture, if a picture has been rendered, and the file format is as indicated in the display buttons                  |
| `Ctrl` `F3`         | Saves a screen dump of the active window                                                                                      |
| `Ctrl` `Shift` `F3` | Saves a screen dump of the whole Blender screen                                                                               |
| `F4`                | Displays the logic context                                                                                                    |
| `F5`                | Displays the shading context, light, material, or world sub-contexts                                                          |
| `F6`                | Displays the shading context and texture sub-context                                                                          |
| `F7`                | Displays the object context                                                                                                   |
| `F8`                | Displays the shading context and world sub-context                                                                            |
| `F9`                | Displays the editing context                                                                                                  |
| `F10`               | Displays the scene context                                                                                                    |
| `F11`               | Hides or shows the render window                                                                                              |
| `F12`               | Starts the rendering from the active camera                                                                                   |
| `Left`              | Go to the previous frame                                                                                                      |
| `Shift` `Left`      | Go to the first frame                                                                                                         |
| `Right`             | Go to the next frame                                                                                                          |
| `Shift` `Right`     | Go to the last frame                                                                                                          |
| `Up`                | Go forward 10 frames                                                                                                          |
| `Down`              | Go back 10 frames                                                                                                             |
| `Alt` `A`           | Change the current Blender window to animation playback mode, the cursor changes to a counter                                 |
| `Alt` `Shift` `A`   | Change the current window and all 3D windows to animation playback mode                                                       |
| `I`                 | Insert key menu, this menu differs from window to window                                                                      |
| `J`                 | Toggle the render buffers                                                                                                     |
| `Ctrl` `O`          | Opens the last saved file                                                                                                     |
| `Q`                 | Quit Blender                                                                                                                  |
| `Ctrl` `Alt` `T`    | Timer menu, this menu offers access to information about drawing speed                                                        |
| `Ctrl` `U`          | Save user defaults, current project settings are written to the default file that will be loaded every time you start Blender |
| `Ctrl` `W`          | Write file without opening a file window                                                                                      |
| `Alt` `W`           | Write videoscape file                                                                                                         |
| `Ctrl` `X`          | Erase everything except the render buffer, the default scene is reloaded                                                      |
| `Ctrl` `Y`          | Redo                                                                                                                          |
| `Ctrl` `Z`          | Undo                                                                                                                          |
| `Ctrl` `Shift` `Z`  | Redo                                                                                                                          |

{.shortcuts}

### Object Mode

| Shortcut                | Action                                                                                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Home`                  | All objects in the visible layer are displayed completely, centered in the window                                                                     |
| `PgUp`                  | Select the next object key, if more than one is selected the selection is shifted up cyclically                                                       |
| `Shift` `PgUp`          | Add to selection the next object key                                                                                                                  |
| `PgDn`                  | Select the previous object key, if more than one is selected the selection is shifted up cyclically                                                   |
| `Shift` `PgDn`          | Adds to selection the previous object key                                                                                                             |
| <code>\`</code>         | Select all layers                                                                                                                                     |
| `Shift` <code>\`</code> | Revert to the previous layer setting                                                                                                                  |
| `Tab`                   | Start or stop edit mode                                                                                                                               |
| `A`                     | Selects or deselects all                                                                                                                              |
| `Ctrl` `A`              | Apply size and rotation                                                                                                                               |
| `Ctrl` `Shift` `A`      | If the active object is automatically duplicated, brings up a menu for actually creating the objects                                                  |
| `Shift` `A`             | Brings up the add menu, the toolbox items that start with ADD                                                                                         |
| `B`                     | Border select, draws a rectangle with the left mouse to select objects                                                                                |
| `Shift` `B`             | Render border, this only works in camera view mode                                                                                                    |
| `C`                     | Center view, the position of the 3D cursor becomes the new center of the 3D window                                                                    |
| `Alt` `C`               | Convert menu, depending on the active object a popup menu is displayed enabling you to convert certain types of ObData                                |
| `Ctrl` `C`              | Copy menu, this menu copies information from the active object to selected objects                                                                    |
| `Shift` `C`             | Center zero view, the 3D cursor is set to zero and the view is changed so all objects can be displayed                                                |
| `D`                     | Display draw mode menu                                                                                                                                |
| `Shift` `D`             | Add duplicate, the selected objects are duplicated                                                                                                    |
| `Alt` `D`               | Add linked duplicate, linked duplicates of the selected objects are created                                                                           |
| `Ctrl` `D`              | Draw the texture image as wire                                                                                                                        |
| `Alt` `E`               | Start or stop edit mode                                                                                                                               |
| `F`                     | If selected object is a mash, toggles face select mode on or off                                                                                      |
| `Ctrl` `F`              | Sort faces, the faces of the active mesh object are sorted based on the current view in the 3D window                                                 |
| `G`                     | Grab mode, or translation mode                                                                                                                        |
| `Alt` `G`               | Clears translations, given in grab mode                                                                                                               |
| `Shift` `G`             | Group selection                                                                                                                                       |
| `I`                     | Insert object key, a keyposition is inserted in the current frame of all selected objects                                                             |
| `Ctrl` `J`              | Join objects, all selected objects of the same type are added to the active object                                                                    |
| `K`                     | Show keys, the draw key option is turned on for all selected objects                                                                                  |
| `Shift` `K`             | Display popup menu for showing and selecting all keys                                                                                                 |
| `L`                     | Makes selected object local, makes library linked objects local for the current scene                                                                 |
| `Ctrl` `L`              | Link selected, links some of the active object data to all selected objects                                                                           |
| `Shift` `L`             | Select linked, selected all objects somehow linked to the active object                                                                               |
| `M`                     | Move selected objects to another layer                                                                                                                |
| `Ctrl` `M`              | Mirror menu, it is possible to mirror an object along the X, Y, or Z axis                                                                             |
| `N`                     | Number panel, the location, rotation, and scaling of the active object are displayed and can be modified                                              |
| `Alt` `O`               | Clear origin, the origin is erased for all child objects, which causes them to move ot the exact location of the parent objects                       |
| `Shift` `O`             | If the selected object is a mesh, toggles the subsurf on or off                                                                                       |
| `Ctrl` `P`              | Make selected objects the children of the active object                                                                                               |
| `Alt` `P`               | Clears parent relation, user is asked if they wish to keep or clear parent-induced transforms                                                         |
| `R`                     | Rotate mode, works on selected objects                                                                                                                |
| `Alt` `R`               | Clears rotation, the X, Y, and Z rotations of selected objects are set to zero                                                                        |
| `S`                     | Size mode or scaling mode, works on selected objects                                                                                                  |
| `Alt` `S`               | Clears size, the X, Y, and Z dimensions of selected objects are set to 1                                                                              |
| `Shift` `S`             | Opens the snap menu                                                                                                                                   |
| `T`                     | Texture space mode, the position of dimensions of the texture space for the selected objects can be changed in the same manner for grab and size mode |
| `Ctrl` `T`              | Makes selected objects track the active object                                                                                                        |
| `Alt` `T`               | Clears old style track, constraint track is removed as all constrains are                                                                             |
| `U`                     | Makes object single user, the inverse operation of link                                                                                               |
| `V`                     | Switches in and out of vertex paint mode                                                                                                              |
| `Alt` `V`               | Object image aspect, this hotkey sets the X and Y dimensions of the selected objects in relation to the dimensions of the image texture they have     |
| `W`                     | Opens the object booleans menu                                                                                                                        |
| `X`                     | Deletes selected objects                                                                                                                              |
| `Z`                     | Toggles solid mode on or off                                                                                                                          |
| `Shift` `Z`             | Toggles shaded mode on or off                                                                                                                         |
| `Alt` `Z`               | Toggles textured mode on or off                                                                                                                       |

{.shortcuts}

### Edit Mode - General

| Shortcut     | Action                                                                                             |
| ------------ | -------------------------------------------------------------------------------------------------- |
| `Tab`        | Start or stop edit mode                                                                            |
| `Alt` `E`    | Start or stop edit mode (alternative)                                                              |
| `Ctrl` `Tab` | Switches between vertex select, edge select, and face select modes                                 |
| `A`          | Select or unselect all                                                                             |
| `B` `B`      | Circle select                                                                                      |
| `Ctrl` `H`   | With vertices selected, this creates a hook object                                                 |
| `N`          | Number panel, simpler than the object mode one                                                     |
| `O`          | Switch in and out of proportional editing                                                          |
| `Shift` `O`  | Toggles between smooth and sharp proportional editing                                              |
| `P`          | Separate, you can choose to make a new object with all selected vertices, edges, faces, and curves |
| `Ctrl` `P`   | Make vertex parent                                                                                 |
| `Ctrl` `S`   | Shear, in edit mode this operation enables you to make selected forms slant                        |
| `U`          | Undo                                                                                               |
| `W`          | Displays specials popup menu                                                                       |
| `Shift` `W`  | Warp, selected vertices can be bent into curves with this option                                   |

{.shortcuts}

### Edit Mode - Mesh

| Shortcut           | Action                                                                                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `Ctrl` `+`         | Adds to selection all vertices connected by an edge to an already selected vertex                                       |
| `Ctrl` `-`         | Removes from selection all vertices of the outer ring of selected vertices                                              |
| `C`                | If using curve deformation, toggles the curve cyclic mode on or off                                                     |
| `E`                | Extrude selected                                                                                                        |
| `Shift` `E`        | Crease subsurf edge                                                                                                     |
| `Ctrl` `E`         | Mark LSCM seam                                                                                                          |
| `F`                | Make edge or face                                                                                                       |
| `Shift` `F`        | Fill selected, all selected vertices that are bound by edges and form a closed polygon are filled with triangular faces |
| `Alt` `F`          | Beauty fill, edges of all selected triangular faces are switched so equally sized faces are formed                      |
| `Ctrl` `F`         | Flip faces, selected triangular faces are paired and common edge of each pair swapped                                   |
| `H`                | Hide selected, all selected vertices and faces are hidden                                                               |
| `Shift` `H`        | Hide not selected, all non-selected vertices and faces are hidden                                                       |
| `Alt` `H`          | Reveal, all hidden vertices and faces are drawn again                                                                   |
| `Alt` `J`          | Join faces, selected triangular faces are joined in pairs and transformed to quads                                      |
| `K`                | Knife tool menu                                                                                                         |
| `L`                | Select linked                                                                                                           |
| `Shift` `L`        | Deselect linked                                                                                                         |
| `Ctrl` `L`         | Select linked selected                                                                                                  |
| `M`                | Mirror, opens a popup asking for the axis to mirror                                                                     |
| `Alt` `M`          | Merges selected vertices as barycentrum or at cursor depending on selection made on popup                               |
| `Ctrl` `N`         | Calculate normals outside                                                                                               |
| `Ctrl` `Shift` `N` | Calculate normals inside                                                                                                |
| `Alt` `S`          | Scales each vertex in the direction of its local normal                                                                 |
| `Ctrl` `T`         | Make triangles, all selected faces are converted to triangles                                                           |
| `U`                | Undo                                                                                                                    |
| `Shift` `U`        | Redo                                                                                                                    |
| `Alt` `U`          | Undo menu                                                                                                               |
| `W`                | Special menu                                                                                                            |
| `X`                | Erase selected                                                                                                          |
| `Y`                | Split, this command splits the selected part of a mesh without deleting faces                                           |

{.shortcuts}

### Edit Mode - Curve

| Shortcut    | Action                                                                                 |
| ----------- | -------------------------------------------------------------------------------------- |
| `C`         | Set the selected curves to cyclic or turn cyclic off                                   |
| `E`         | Extrude curve                                                                          |
| `F`         | Add segment, a segment is added between two selected vertices at the end of two curves |
| `H`         | Toggle handle align or free                                                            |
| `Shift` `H` | Set handle to auto                                                                     |
| `Ctrl` `H`  | Calculate handles                                                                      |
| `L`         | Select linked                                                                          |
| `Shift` `L` | Deselect linked                                                                        |
| `M`         | Mirror selected control points exactly as for vertices in a mesh                       |
| `T`         | Tilt mode, specify an extra axis rotation for each vertex in a 3D curve                |
| `Alt` `T`   | Clear tilt                                                                             |
| `V`         | Vector handle                                                                          |
| `W`         | The special menu for curves appears                                                    |
| `X`         | Erase selected                                                                         |

{.shortcuts}

### Edit Mode - Surface

| Shortcut    | Action                                                                                 |
| ----------- | -------------------------------------------------------------------------------------- |
| `C`         | Toggle cyclic menu                                                                     |
| `E`         | Extrude selected                                                                       |
| `F`         | Add segment, a segment is added between two selected vertices at the end of two curves |
| `L`         | Select linked                                                                          |
| `Shift` `L` | Deselect linked                                                                        |
| `M`         | Mirror selected control points exactly as for vertices in a mesh                       |
| `Shift` `R` | Select row, starting with the last selected vertex                                     |
| `W`         | The special menu for surfaces appears                                                  |
| `X`         | Erase selected                                                                         |

{.shortcuts}

### Edit Mode - Font

| Shortcut        | Action                                        |
| --------------- | --------------------------------------------- |
| `Right`         | Move text cursor one position forward         |
| `Shift` `Right` | Move text cursor to the end of the line       |
| `Left`          | Move text cursor one position backwards       |
| `Shift` `Left`  | Move text cursor to the start of the line     |
| `Down`          | Move text cursor one line forward             |
| `Shift` `Down`  | Move text cursor to the end of the text       |
| `Up`            | Move text cursor one line back                |
| `Shift` `Up`    | Move text cursor to the beginning of the text |
| `Alt` `U`       | Reload original data                          |
| `Alt` `V`       | Paste text                                    |

{.shortcuts}

### VertexPaint

| Shortcut    | Action                                                                      |
| ----------- | --------------------------------------------------------------------------- |
| `Shift` `K` | All vertex colors are erased, they are changed to the current drawing color |
| `U`         | Undo, press twice redos the undone                                          |
| `W`         | Shared vertexcol, the colors of all faces that share vertices are blended   |

{.shortcuts}

### UV Editor

| Shortcut  | Action                                                                                        |
| --------- | --------------------------------------------------------------------------------------------- |
| `E`       | LSCM unwrapping, launches on the faces visible in the UV editor                               |
| `P`       | Pin selected vertices, they will stay in place on the UV editor when executing an LSCM unwrap |
| `Alt` `P` | Un-pin selected vertices                                                                      |

{.shortcuts}

### FaceSelect

| Shortcut | Action                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| `Tab`    | Switches to edit mode                                                                                        |
| `F`      | With multiple, co-planar faces selected, this will merge them into one FGon so long as they remain co-planar |
| `L`      | Select linked UVs                                                                                            |
| `R`      | Calls a menu allowing to rotate the UV coordinates or the vertex col                                         |
| `U`      | Calls the UV Calculation menu                                                                                |

{.shortcuts}

## Also see

- [Keyboard shortcuts for Blender](https://download.blender.org/documentation/BlenderHotkeyReference.pdf)
  _(download.blender.org)_
