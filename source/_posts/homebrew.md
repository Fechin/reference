---
title: Homebrew
date: 2023-04-12
background: bg-[#fbb041]
tags:
  - packages manager
  - macos
categories:
  - Toolkit
intro: This is a quick reference cheat sheet to getting started with homebrew.
plugins:
  - copyCode
---

## Getting Started

### Install

If not installed, install Command Line Tools (CLT)

```
xcode-select --install
```

Install Homebrew :

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Commands

|                                  |                                        |
|----------------------------------|----------------------------------------|
| ``` brew install git ```         | Install a package                      |
| ``` brew uninstall git ```       | Uninstall a package                    |
| ``` brew upgrade git ```         | Upgrade package                        |
| ``` brew unlink git ```          | Unlink                                 |
| ``` brew link git ```            | Link                                   |
| ``` brew switch git  1.0.0 ```   | Switch package version                 |
| ``` brew list --versions git ``` | List the installed versions of package |


### Help

Display the version of Homebrew.
````
brew --version
````
Print Help Information
````
brew help
````
Print Help Info for a brew command
````
brew help <sub-command>
````
Check system for potential problems.
````
brew doctor
````

### Updates

Fetch latest version of homebrew and formula
```
brew update
```
Show formulae with an updated version available
```
brew outdated
```
Upgrade all outdated and unpinned brews
```
brew upgrade
```
Upgrade only the specified brew
```
brew upgrade <formula>
```
Prevent the specified formulae from being upgraded
```
brew pin <formula>
```
Allow the specified formulae to be upgraded.
```
brew unpin <formula>
```

### Repositories

List all the current tapped repositories (taps)
```
brew tap
```
Tap a formula repository from Github using https for tap https://github.com/user/homebrew-repo
```
brew tap <user/repo>
```
Tap a formula repository from the specified URL
```
brew tap <user/repo> <URL>
```
Remove the given tap from the repository
```
brew untap <user/repo>
```

### Cask

Tap the Cask repository from Github.
```
brew tap homebrew/cask
```
List all the installed casks .
```
brew cask list
```
Search all known casks based on the substring text.
```
brew search <text>
```
Install the given cask.
```
brew cask install <cask>
```
Reinstalls the given Cask
```
brew cask reinstall <cask>
```
Uninstall the given cask.
```
brew cask uninstall <cask>
```

### Search, Install, Remove

List all the installed formulae.
```
brew list
```
Display all locally available formulae for brewing.
```
brew search
```
Perform a substring search of formulae names for brewing.
```
brew search <text>
```
Display information about the formula.
```
brew info <formula>
```
Install the formula.
```
brew install <formula>
```
Uninstall the formula.
```
brew uninstall <formula>
```

### Cleanup

Remove older versions of installed formulae.
```
brew cleanup
```
Remove older versions of specified formula.
```
brew cleanup <formula>
```
Display all formula that will be removed (dry run)
```
brew cleanup -n
```
