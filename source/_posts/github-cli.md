---
title: Github CLI
date: 2023-11-29
icon:
background: bg-[#808080]
tags:
  - Github
  - CICD
  - CLI
categories:
  - Toolkit
intro: A quick reference to Github CLI, an open-source command line tool that enables GitHub on your terminal.
plugins:
  - copyCode
---

## Getting Started

### Installation

**Windows**

| Tool   | Install                          | Upgrade                          |
| :----- | :------------------------------- | :------------------------------- |
| WinGet | `winget install --id Github.cli` | `winget upgrade --id GitHub.cli` |
| Scoop  | `scoop install gh`               | `scoop update gh`                |
| Choco  | `choco install gh`               | `choco upgrade gh`               |

{.show-header}

**Mac OS**

| Tool     | Install                | Upgrade                                        |
| :------- | :--------------------- | :--------------------------------------------- |
| Brew     | `brew install gh`      | `brew upgrade gh`                              |
| MacPorts | `sudo port install gh` | `sudo port selfupdate && sudo port upgrade gh` |

{.show-header}

**Linux**

See the [install instructions](https://github.com/cli/cli/blob/trunk/docs/install_linux.md) for other Linux
distributions.

Installation Script:

```bash
type -p curl >/dev/null || (sudo apt update && sudo apt install curl -y)
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
```

---

### Basic Usage

**Help and Documentation**

Display command options:

| Command             | Description                                                                                                    |
| :------------------ | :------------------------------------------------------------------------------------------------------------- |
| `gh help [command]` | Help provides help for any command in the application. Simply type gh help [path to command] for full details. |

**Authentication**

| Command             | Description                                                       |
| :------------------ | :---------------------------------------------------------------- |
| `gh auth login`     | Default authentication with web-based browser                     |
| `gh auth logout`    | Removes the authentication configuration for a host               |
| `gh auth refresh`   | Expand or fix the permission scopes for stored credentials        |
| `gh auth setup-git` | Configures git to use GitHub CLI as a credential helper           |
| `gh auth status`    | Verifies and displays information about your authentication state |
| `gh auth token`     | Print the auth token gh is configured to use                      |

With Github token:

```shell
$ gh auth --with-token < token.txt
```

### Repository Management

**General**

| Command                 | Description                                       |
| :---------------------- | :------------------------------------------------ |
| `gh repo create`        | Create a new GitHub repository                    |
| `gh repo list [target]` | List repositories owned by a user or organization |

**Targets**

| Command                      | Description                                                    |
| :--------------------------- | :------------------------------------------------------------- |
| `gh repo archive [repo]`     | Archive a GitHub repository                                    |
| `gh repo clone [dir]`        | Clone a GitHub repository locally                              |
| `gh repo delete [repo]`      | Delete a GitHub repository                                     |
| `gh repo deploy-key`         | Manage deploy keys in a repository                             |
| `gh repo edit [repo]`        | Edit repository settings                                       |
| `gh repo fork [repo]`        | Create a fork of a repository                                  |
| `gh repo rename [name]`      | Rename a GitHub repository                                     |
| `gh repo set-default [repo]` | This command sets the default remote repository                |
| `gh repo sync [dest-repo]`   | Sync destination repository from source repository             |
| `gh repo view [repo]`        | Display the description and the README of a GitHub repository. |

### Issues

**Search Issues**

| Command                    | Description                 |
| :------------------------- | :-------------------------- |
| `gh search issues [query]` | Search for issues on GitHub |

**Examples**

```bash
# search issues matching set of keywords "readme" and "typo"
$ gh search issues readme typo

# search issues matching phrase "broken feature"
$ gh search issues "broken feature"

# search issues and pull requests in cli organization
$ gh search issues --include-prs --owner=cli

# search open issues assigned to yourself
$ gh search issues --assignee=@me --state=open

# search issues with numerous comments
$ gh search issues --comments=">100"

# search issues without label "bug"
$ gh search issues -- -label:bug
```

### Pull Requests

**Pull Request Actions**

| Command        | Description                               |
| :------------- | :---------------------------------------- |
| `gh pr create` | Create a pull request on GitHub           |
| `gh pr list`   | List pull requests in a GitHub repository |
| `gh pr status` | Show status of relevant pull requests     |

**Example**

```shell
$ gh pr status
```

Sample Output:

```
Current branch
  #12 Remove the test feature [user:patch-2]
   - All checks failing - Review required

Created by you
  You have no open pull requests

Requesting a code review from you
  #13 Fix tests [branch]
  - 3/4 checks failing - Review required
  #15 New feature [branch]
   - Checks passing - Approved
```

### Github Actions

**General Actions**

| Command               | Description                                                                         |
| :-------------------- | :---------------------------------------------------------------------------------- |
| `gh workflow disable` | Disable a workflow, preventing it from running or showing up when listing workflows |
| `gh workflow enable`  | Enable a workflow, allowing it to be run and show up when listing workflows         |
| `gh workflow list`    | List workflow files, hiding disabled workflows by default                           |
| `gh workflow run`     | Create a workflow_dispatch event for a given workflow                               |
| `gh workflow view`    | View the summary of a workflow                                                      |

**Running Actions**

| Command           | Description                                                         |
| :---------------- | :------------------------------------------------------------------ |
| `gh run cancel`   | Cancel a workflow run                                               |
| `gh run delete`   | Delete a workflow run                                               |
| `gh run download` | Download artifacts generated by a GitHub Actions workflow run       |
| `gh run list`     | List recent workflow runs                                           |
| `gh run rerun`    | Rerun an entire run, only failed jobs, or a specific job from a run |
| `gh run view`     | View a summary of a workflow run                                    |
| `gh run watch`    | Watch a run until it completes, showing its progress                |

### Aliases

**General Alias Settings**

| Command           | Description                                                      |
| :---------------- | :--------------------------------------------------------------- |
| `gh alias delete` | Delete set aliases                                               |
| `gh alias import` | Import aliases from the contents of a YAML file                  |
| `gh alias list`   | Prints out all of the aliases gh is configured to use            |
| `gh alias set`    | Define a word that will expand to a full gh command when invoked |

### Releases

**General Actions**

| Command             | Description                                  |
| :------------------ | :------------------------------------------- |
| `gh release create` | Create a new GitHub Release for a repository |
| `gh release list`   | List releases in a repository                |

**Target Commands**

| Command                   | Description                             |
| :------------------------ | :-------------------------------------- |
| `gh release delete`       | Delete a release                        |
| `gh release delete-asset` | Delete an asset from a release          |
| `gh release download`     | Download assets from a GitHub release   |
| `gh release edit`         | Edit a release                          |
| `gh release upload`       | Upload asset files to a GitHub Release  |
| `gh release view`         | View information about a GitHub Release |

### Configuration

**Targeted Settings**

| Command                 | Description                                         |
| :---------------------- | :-------------------------------------------------- |
| `gh config clear-cache` | Clear the cli cache                                 |
| `gh config get`         | Print the value of a given configuration key        |
| `gh config list`        | Print a list of configuration keys and values       |
| `gh config set`         | Update configuration with a value for the given key |
