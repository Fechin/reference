---
title: npm
date: 2020-12-24 17:12:25
background: bg-[#ebd94e]
tags:
  - js
  - web
  - node
  - npm
categories:
  - Programming
intro: |
  A NPM (node package manager) cheat sheet with the most important concepts, and commands to install, update, and manage your node packages.
plugins:
  - copyCode
  - runCode
---

## Getting Started with npm

### Introduction

npm (Node Package Manager) is the default package manager for Node.js. It allows you to install, update, and manage packages (libraries or modules) for your Node.js applications.

### Installing and checking npm version

Install Node.js from [nodejs.org](https://nodejs.org/), which includes npm. After installation, you can check the installed version of npm using the following command:

```bash
npm --version
# or
npm -v
```

### Initializing a new project

```bash
npm init # Interactive setup
# or
npm init -y # Creates a package.json with default values
```

## Installing packages

### Install dependencies from package.json

```bash
npm install
# or
npm i
```

### Install a specific package

```bash
npm install <package-name>              # Install and add to dependencies
npm install <package-name> --save-dev   # Add to devDependencies
npm install <package-name> -D           # Shorthand for --save-dev
npm install <package-name> -g           # Install globally
npm install <package-name>@<version>    # Install specific version
npm install <package-name>@latest       # Install latest version
```

### Uninstall a package

```bash
npm uninstall <package-name>          # Uninstall package
npm uninstall <package-name> -g       # Uninstall globally
npm rm <package-name>                 # Shorthand for uninstall
```

## Viewing, searching and exploring packages

### Viewing packages

```bash
npm view <package-name>               # View package details
npm view <package-name> versions      # View all versions of a package
npm view <package-name> version      # View the latest version of a package
npm view <package-name> description   # View the description of a package
```

### Searching for packages

```bash
npm search <search-term>              # Search for packages with similar terms
```

### Exploring packages

```bash
npm docs <package-name>                # Open package documentation in the browser
npm home <package-name>                # Open package homepage in the browser
npm repo <package-name>                # Open package repository in the browser
```
