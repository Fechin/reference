---
title: Git
date: 2020-11-25 18:28:43
background: bg-[#d7593e]
tags:
  - github
  - gitlab
  - version
  - VCS
categories:
  - Linux Command
intro: This cheat sheet summarizes commonly used Git command line instructions for quick reference.
plugins:
  - copyCode
---

## Getting Started

### Create a Repository

Create a new local repository

```shell script
$ git init [project name]
```

Clone a repository

```shell script
$ git clone git_url
```

Clone a repository into a specified directory

```shell script
$ git clone git_url my_directory
```

### Make a change {.row-span-2}

Show modified files in working directory, staged for your next commit

```shell script
$ git status
```

Stages the file, ready for commit

```shell script
$ git add [file]
```

Stage all changed files, ready for commit

```shell script
$ git add .
```

Commit all staged files to version history

```shell script
$ git commit -m "commit message"
```

Commit all your tracked files to version history

```shell script
$ git commit -am "commit message"
```

Discard changes in working directory which is not staged

```shell script
$ git restore [file]
```

Unstage a staged file or file which is staged

```shell script
$ git restore --staged [file]
```

Unstage a file, keeping the file changes

```shell script
$ git reset [file]
```

Revert everything to the last commit

```shell script
$ git reset --hard
```

Diff of what is changed but not staged

```shell script
$ git diff
```

Diff of what is staged but not yet committed

```shell script
$ git diff --staged
```

Apply any commits of current branch ahead of specified one

```shell script
$ git rebase [branch]
```

### Configuration

Set the name that will be attached to your commits and tags

```shell script
$ git config --global user.name "name"
```

Set an email address that will be attached to your commits and tags

```shell script
$ git config --global user.email "email"
```

Enable some colorization of Git output

```shell script
$ git config --global color.ui auto
```

Edit the global configuration file in a text editor

```shell script
$ git config --global --edit
```

### Working with Branches

List all local branches

```shell script
$ git branch
```

List all branches, local and remote

```shell script
$ git branch -av
```

Switch to my_branch, and update working directory

```shell script
$ git checkout my_branch
```

Create a new branch called new_branch

```shell script
$ git checkout -b new_branch
```

Delete the branch called my_branch

```shell script
$ git branch -d my_branch
```

Merge branchA into branchB

```shell script
$ git checkout branchB
$ git merge branchA
```

Tag the current commit

```shell script
$ git tag my_tag
```

### Observe your Repository

Show the commit history for the currently active branch

```shell script
$ git log
```

Show the commits on branchA that are not on branchB

```shell script
$ git log branchB..branchA
```

Show the commits that changed file, even across renames

```shell script
$ git log --follow [file]
```

Show the diff of what is in branchA that is not in branchB

```shell script
$ git diff branchB...branchA
```

Show any object in Git in human-readable format

```shell script
$ git show [SHA]
```

### Synchronize

Fetch down all the branches from that Git remote

```shell script
$ git fetch [alias]
```

Merge a remote branch into your current branch to bring it up to date

```shell script
$ git merge [alias]/[branch]
# No fast-forward
$ git merge --no-ff [alias]/[branch]
# Only fast-forward
$ git merge --ff-only [alias]/[branch]
```

Transmit local branch commits to the remote repository branch

```shell script
$ git push [alias] [branch]
```

Fetch and merge any commits from the tracking remote branch

```shell script
$ git pull
```

Merge just one specific commit from another branch to your current branch

```shell script
$ git cherry-pick [commit_id]
```

### Remote

Add a git URL as an alias

```shell script
$ git remote add [alias] [url]
```

Show the names of the remote repositories you've set up

```shell script
$ git remote
```

Show the names and URLs of the remote repositories

```shell script
$ git remote -v
```

Remove a remote repository

```shell script
$ git remote rm [remote repo name]
```

Change the URL of the git repo

```shell script
$ git remote set-url origin [git_url]
```

### Temporary Commits

Save modified and staged changes

```shell script
$ git stash
```

List stack-order of stashed file changes

```shell script
$ git stash list
```

Write working from top of stash stack

```shell script
$ git stash pop
```

Discard the changes from top of stash stack

```shell script
$ git stash drop
```

### Tracking path Changes

Delete the file from project and stage the removal for commit

```shell script
$ git rm [file]
```

Change an existing file path and stage the move

```shell script
$ git mv [existing-path] [new-path]
```

Show all commit logs with indication of any paths that moved

```shell script
$ git log --stat -M
```

### Ignoring Files

```
/logs/*

# "!" means don't ignore
!logs/.gitkeep

/# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore SASS config files
.sass-cache
```

A `.gitignore` file specifies intentionally untracked files that Git should ignore

## Git Tricks

### Rename branch

- #### **Renamed** to `new_name`
  ```shell script
  $ git branch -m <new_name>
  ```
- #### **Push** and reset
  ```shell script
  $ git push origin -u <new_name>
  ```
- #### **Delete** remote branch
  ```shell script
  $ git push origin --delete <old>
  ```
  {.marker-timeline}

### Log

Search change by content

```shell script
$ git log -S'<a term in the source>'
```

Show changes over time for specific file

```shell script
$ git log -p <file_name>
```

Print out a cool visualization of your log

```shell script {.wrap}
$ git log --pretty=oneline --graph --decorate --all
```

### Branch {.row-span-2}

List all branches and their upstreams

```shell script
$ git branch -vv
```

Quickly switch to the previous branch

```shell script
$ git checkout -
```

Get only remote branches

```shell script
$ git branch -r
```

Checkout a single file from another branch

```shell script
$ git checkout <branch> -- <file>
```

### Rewriting history

Rewrite last commit message

```shell script
$ git commit --amend -m "new message"
```

Amend the latest commit without changing the commit message.

```shell script
$ git commit --amend --no-edit
```

See also: [Rewriting history](https://www.atlassian.com/git/tutorials/rewriting-history)

### Git Aliases

```cmd
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

See also: [More Aliases](https://gist.github.com/johnpolacek/69604a1f6861129ef088)

## Advanced Git

### Submodules

Create a new submodule within your repository:

```shell script
$ git submodule add <repository_url> <path>
```

Clone a repository and initialize its submodules:

```shell script
$ git clone --recursive <repository_url>
```

Update all the submodules in your repository to the latest commit of their respective branches:

```shell script
$ git submodule update
```

Pull the latest changes from the remote repositories of the submodules and update them in your main repository:

```shell script
$ git submodule update --remote
```

Remove a submodule from your repository:

```shell script
$ git submodule deinit <path>
$ git rm <path>
$ git commit -m "Removed submodule"
```

### Cherry-picking

Cherry-picking allows you to apply a specific commit from one branch to another branch.

```shell script
$ git cherry-pick <commit_hash>
```

### Reflog

Display the reflog, showing the history of HEAD and branch movements:

```shell script
$ git reflog
```

Find the hash of the lost commit or branch using the reflog and then checkout to that hash to restore it:

```shell script
$ git checkout <commit_or_branch_hash>
```
