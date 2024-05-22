---
title: Github Actions
date: 2023-11-28
icon:
background: bg-[#808080]
tags:
  - Github
  - CICD
categories:
  - Toolkit
intro:
  A quick reference to Github Actions for the automation of software workflows, allowing developers to build, test, and
  deploy code right from their GitHub repositories.
plugins:
  - copyCode
---

## Getting Started

### Introduction

[GitHub Actions](https://docs.github.com/en/actions) is a CI/CD platform that enables automation of software workflows,
allowing developers to build, test, and deploy code right from their GitHub repositories.

---

### Workflow Files

Github Action Workflows are defined in special YAML files, typically stored in a `.github/workflows` directory in the
github repository.

```yaml
name: hello-world
on: push
jobs:
  hello-world-job:
    runs-on: ubuntu-latest
    steps:
      - name: Hello World
        run: echo "Hello World!"
```

**Viewing your workflow runs**

- On GitHub.com, navigate to the main page of the repository.
- Under your repository name, click `Actions`.
- In the left sidebar, click the workflow you want to display, in this example "hello-world"

---

### Workflow Syntax

```yaml
name: learn-github-actions
run-name: ${{ github.actor }} is learning GitHub Actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v3
        with:
          node-version: "14"
      - run: npm install -g bats
      - run: bats -v
```

### Workflow Syntax Descriptions

| Line                  | Description                                                                                                                                                                   |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name:`               | Sets the name of the GitHub Actions workflow. It's a label used for identifying the workflow in the repository.                                                               |
| `run-name:`           | Sets a custom name for the run, using a GitHub context `${{ github.actor }}` to include the name of the user who initiated the run.                                           |
| `on:`                 | Specifies the event that triggers the workflow. In this case, the workflow is triggered on any `push` event to the repository.                                                |
| `jobs:`               | Defines a group of jobs that will be executed as part of the workflow. Each job runs independently in the workflow.                                                           |
| `check-bats-version:` | Identifier for a specific job within the workflow. This job is named `check-bats-version`.                                                                                    |
| `runs-on:`            | Specifies the type of machine to run the job on. Here, it's set to run on the latest version of Ubuntu.                                                                       |
| `steps:`              | Contains a sequence of tasks (steps) that will be executed as part of the job.                                                                                                |
| `uses:`               | Used to specify an action to include as part of a step. For example, `actions/checkout@v4` checks out the repository, and `actions/setup-node@v3` sets up a Node environment. |
| `with:`               | Specifies additional parameters for the action. It's used in conjunction with `uses` to configure the action.                                                                 |
| `node-version:`       | Contains parameter under `with`, specifying the version of Node.js to be set up by the `setup-node` action. In this case, it's set to version '14'.                           |

### Events

```yaml
name: Event-trigger-on-push-example

on: [push] # event is defined here

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run a script
        run: echo "This workflow runs on every push to the repository."
```

**Event Triggers**

| Event Name                    | Description                                     |
| :---------------------------- | :---------------------------------------------- |
| `push`                        | Triggers on a push to the repository.           |
| `pull_request`                | Triggers on pull request events.                |
| `pull_request_review`         | Triggers on pull request review events.         |
| `pull_request_review_comment` | Triggers on comments on pull request reviews.   |
| `pull_request_target`         | For workflows in forked repositories.           |
| `fork`                        | Triggers when a repository is forked.           |
| `issue_comment`               | Triggers on issue and PR comments.              |
| `issues`                      | Triggers on issue events.                       |
| `label`                       | Triggers on label events.                       |
| `milestone`                   | Triggers on milestone events.                   |
| `deployment`                  | Triggers on deployment.                         |
| `deployment_status`           | Triggers on deployment status updates.          |
| `public`                      | Triggers when repo goes from private to public. |
| `repository_dispatch`         | Triggers on a custom repository event.          |
| `schedule`                    | Triggers on a defined schedule.                 |
| `workflow_dispatch`           | Allows manual triggering of the workflow.       |
| `workflow_run`                | Triggers on the completion of another workflow. |
| `create`                      | Triggers when a branch or tag is created.       |
| `delete`                      | Triggers when a branch or tag is deleted.       |
| `page_build`                  | Triggers on GitHub Pages build events.          |
| `release`                     | Triggers on release events.                     |
| `watch`                       | Triggers when someone stars the repo.           |
| `registry_package`            | Triggers on registry package events.            |
| `status`                      | Triggers on status updates to a Git commit.     |
| `project`                     | Triggers on project board events.               |
| `project_card`                | Triggers on project card events.                |
| `project_column`              | Triggers on project column events.              |
| `member`                      | Triggers on collaborator events.                |
| `gollum`                      | Triggers on wiki page updates.                  |

### Jobs

Single Job:

```yaml
name: Single Job
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run a build script
        run: script/build
```

Multiple Jobs:

```yaml
name: CI Workflow

on: [push]

jobs:
  job-1:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Runs job 1
        run: echo "Running Job 1"

  job-2:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Runs job 2
        run: echo "Running Job 2"

  job-3:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Runs job 3
        run: echo "Running Job 3"
```

### Steps

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # step 1
      - name: Check out repository
        uses: actions/checkout@v2

      # step 2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"

      # step 3
      - name: Install dependencies
        run: npm install

      # step 4
      - name: Run tests
        run: npm test
```

### Github Runners & Self Hosted Runners

[Github Hosted Runner](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners):

```yaml
name: Workflow
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest # default runner
    steps:
      - uses: actions/checkout@v2
      - name: Run a script
        run: echo "Hello, world!"
```

[Self Hosted Runner](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)

```yaml
name: Workflow with Self-Hosted Runner
on: [push]
jobs:
  build:
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v2
      - name: Run a script
        run: echo "Hello from self-hosted runner!"
```

### Environment Variables

Custom variable defined using environments.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      CUSTOM_VARIABLE: "Hello, World!" # Custom variable defined using env:
    steps:
      - name: Check environment variable
        run: echo "Value of CUSTOM_VAR is $CUSTOM_VAR"
```

### Secrets

To add a new secret in your github repository nagivate to `Repository` > `Settings` > `Security` >
`Secrets and Variables` > `Actions` > `New Repository Secret`

Example Secrets workflow:

```yaml
name: Workflow with Secrets

on: [push]

jobs:
  example_job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Use a secret
        run: echo "The secret is ${{ secrets.MY_SECRET }}"
```

### Artifacts

To access your artifact navigate to `Repository` > `Actions` > `Workflow Run` > `Artifacts`

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Build project
        run: make build
      - name: Upload build artifact
        uses: actions/upload-artifact@v3 # upload Artifacts prebuilt action
        with:
          name: my-artifact
          path: path/to/artifact
```

### Caching Dependencies

Dependency caches stores downloaded packages or compiled binaries of your workflows.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Cache dependencies
        uses: actions/cache@v2 # stores downloaded packages or compiled binaries
        with:
          path: |
            path/to/dependencies
            another/path
          key: ${{ runner.os }}-deps-${{ hashFiles('**/lockfile') }} # hash of the dependency lock file is generated in the OS
      - name: Install dependencies
        run: install-command
```

### Matrix Strategies

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
        # matrix strategy runs enables you to run jobs across multiple combinations of environments and OS's
        os: [ubuntu-latest, windows-latest, macOS-latest]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm install
      - run: npm test
        env:
          CI: true
```

### Conditions and Expressions

Branch Conditions:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Run build
        if: github.ref == 'refs/heads/main' # "Run build" step will only execute if the current branch is main.
        run: make build
```

Event Trigger Conditions:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Run tests
        if: github.event_name == 'pull_request' # "Run tests" step is executed only when the workflow is triggered by a pull request event
        run: npm test
```

### Workflow Commands

Depending on your OS, if you are running ubuntu-latest, bash commands should work

```yaml
steps:
  - name: Set environment variable
    run: echo "NAME=value" >> $GITHUB_ENV
```

### Concurrency

The concurrency field creates a group based on the `github.head_ref`. If a new run starts within the same concurrency
group, it cancels any in-progress runs.

```yaml
jobs:
  my_job:
    runs-on: ubuntu-latest
    concurrency:
      group: ${{ github.head_ref }}
      cancel-in-progress: true
    steps:
      - name: Run a script
        run: echo "Running script..."
```

## Also see

- [YAML](/yaml) _(cheatsheets.zip)_
- [Github](/github) _(cheatsheets.zip)_
- [Github Actions Documentation](https://docs.github.com/en/actions)_(docs.github.com/en/actions)_
