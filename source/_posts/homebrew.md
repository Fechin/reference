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

```bash
xcode-select --install
```

Install Homebrew :

```bash {.wrap}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

[Official Website](https://brew.sh/) {.link-arrow}

### Commands

|                            |                                        |
| -------------------------- | -------------------------------------- |
| `brew install git`         | Install a package                      |
| `brew uninstall git`       | Uninstall a package                    |
| `brew upgrade git`         | Upgrade package                        |
| `brew unlink git`          | Unlink                                 |
| `brew link git`            | Link                                   |
| `brew switch git  1.0.0`   | Switch package version                 |
| `brew list --versions git` | List the installed versions of package |

### Help

Display the version of Homebrew.

```bash
brew --version
```

Print Help Information

```bash
brew help
```

Print Help Info for a brew command

```bash
brew help <sub-command>
```

Check system for potential problems.

```bash
brew doctor
```

### Updates

Fetch latest version of homebrew and formula

```bash
brew update
```

Show formulae with an updated version available

```bash
brew outdated
```

Upgrade all outdated and unpinned brews

```bash
brew upgrade
```

Upgrade only the specified brew

```bash
brew upgrade <formula>
```

Prevent the specified formulae from being upgraded

```bash
brew pin <formula>
```

Allow the specified formulae to be upgraded.

```bash
brew unpin <formula>
```

### Repositories

List all the current tapped repositories (taps)

```bash
brew tap
```

Tap a formula repository from Github using https for tap https://github.com/user/homebrew-repo

```bash
brew tap <user/repo>
```

Tap a formula repository from the specified URL

```bash
brew tap <user/repo> <URL>
```

Remove the given tap from the repository

```bash
brew untap <user/repo>
```

### Cask

Tap the Cask repository from Github.

```bash
brew tap homebrew/cask
```

List all the installed casks .

```bash
brew cask list
```

Search all known casks based on the substring text.

```bash
brew search <text>
```

Install the given cask.

```bash
brew cask install <cask>
```

Reinstalls the given Cask

```bash
brew cask reinstall <cask>
```

Uninstall the given cask.

```bash
brew cask uninstall <cask>
```

### Search, Install, Remove

List all the installed formulae.

```bash
brew list
```

Display all locally available formulae for brewing.

```bash
brew search
```

Perform a substring search of formulae names for brewing.

```bash
brew search <text>
```

Display information about the formula.

```bash
brew info <formula>
```

Install the formula.

```bash
brew install <formula>
```

Uninstall the formula.

```bash
brew uninstall <formula>
```

### Cleanup

Remove older versions of installed formulae.

```bash
brew cleanup
```

Remove older versions of specified formula.

```bash
brew cleanup <formula>
```

Display all formula that will be removed (dry run)

```bash
brew cleanup -n
```
