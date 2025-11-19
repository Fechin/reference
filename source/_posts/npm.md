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
npm view <package-name> version       # View the latest version of a package
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

## Managing packages

### Updating packages

```bash
npm outdated                           # Check for outdated packages
npm update <package-name>              # Update a specific package
npm update                             # Update all packages
```

### Listing installed packages

```bash
npm list                              # List installed packages in the current project
npm list -g                           # List globally installed packages
npm list --depth=0                    # List top-level installed packages only
```

### Running scripts

```bash
npm run <script-name>                 # Run a script defined in package.json
npm start                             # Run the 'start' script
npm test                              # Run the 'test' script
npm build                             # Run the 'build' script
```

### Cache management

```bash
npm cache verify                      # Verify the integrity of the npm cache
npm cache clean                       # Clear the npm cache
npm cache clean --force               # Force clear the npm cache
```

### Configuring npm

```bash
npm config list                       # List all npm configuration settings
npm config set <key> <value>          # Set a configuration value
npm config get <key>                  # Get the value of a configuration key
npm config delete <key>               # Delete a configuration key
```

### Auditing and security

```bash
npm audit                             # Audit dependencies for vulnerabilities
npm audit fix                         # Fix vulnerabilities in dependencies
npm audit fix --force                 # Force fix vulnerabilities, may update major versions
```

## Publishing packages

```bash
npm login                             # Log in to your npm account (npmjs.com)
npm publish                           # Publish a package to the npm registry
npm version <new-version>             # Bump the version of your package (e.g., patch, minor, major)
npm unpublish <package-name>          # Unpublish a package (within 72 hours of publishing)
```

## Other useful commands

```bash
npm help                              # Get general help on npm
npm help <command>                    # Get help on a specific npm command
npm ci                                # Install dependencies from package-lock.json (clean install)
npm prune                             # Remove extraneous packages
npm dedupe                           # Reduce duplication in the node_modules folder
```
