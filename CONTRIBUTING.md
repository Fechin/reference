# Contributing notes
It is a good practice to refer to the source code of the existing cheat sheet!

## Step 1. 
Please fork this repo, if you'd like to submit a PR. 

## Step 2. 

A `{filename}.md` file will be processed into a cheat sheet page, you can visit it via https://quickref/{filename} after it is released.

Create a markdown file, or edit an existing markdown file.

#### Front Matter
```markdown
---
title: QuickRef
date: 2020-11-25 18:28:43
icon: icon-style
background: bg-green-600
tags:
categories:
    - Other
intro: This is a reference of styles that you can use on quickref cheatsheets!
---
```
Just need its `title` and `intro`, and ignore other options. I will complete it, if it can be released

#### CSS classes
QuickRefs uses [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs), and supports adding classes via its syntax.

There is a reference of styles that you can use on `quickref.me` cheat sheets: 
https://quickref.me/quickref



## Step 3. 
Submit a Pull Request and wait for the author to publish!
