---
title: Tura
date: 2026-07-16 12:00:00
background: bg-[#40e0d0]
tags:
  - tura
  - ai
  - coding-agent
  - cli
categories:
  - AI
intro: |
  [Tura](https://turaai.net/) is an open-source, local-first coding agent with an interactive terminal UI, a scriptable CLI, multi-provider model routing, and persistent sessions.
plugins:
  - copyCode
---

## Getting Started {.cols-3}

### Install

```bash
# Install from npm
$ npm install -g tura-ai

# Verify the CLI
$ tura --help
```

Prebuilt Windows, macOS, and Linux packages are also available from [GitHub Releases](https://github.com/Tura-AI/tura/releases).

### Configure a Provider

```bash
# List providers and authentication status
$ tura provider list

# Start the Codex login flow
$ tura provider login codex

# Print the OpenAI login URL without opening it
$ tura provider login openai --no-open
```

Tura does not bundle model credentials. Configure at least one provider before running an agent task.

### Interactive Terminal

```bash
# Open the interactive TUI
$ tura

# Open in a specific workspace
$ tura --cwd /path/to/project

# Select the interface language
$ tura --lang en-US
```

## Running Agent Tasks {.cols-2}

### Non-interactive Run {.row-span-2}

```bash
# Send a prompt and stream the response
$ tura run "summarize this repository"

# Select a model for one request
$ tura run --model openai/gpt-5 "fix the failing tests"

# Set a timeout in seconds
$ tura run --timeout 1200 "run the release checks"

# Use a saved agent configuration
$ tura run --agent-id AGENT_ID "review the changes"
```

### Script-friendly CLI {.row-span-2}

```bash
# Run a task in the current workspace
$ tura exec --cwd . "inspect the codebase"

# Suppress progress written to stderr
$ tura exec --quiet "return only the answer"

# Continue until the goal completes or needs input
$ tura exec --goal "fix and verify the tests"

# Save the final response to a file
$ tura exec --output-last-message result.md "review this repo"
```

### Shell Environments

```bash
# Force command tools to use Bash
$ tura bash "check the shell scripts"

# Force command tools to use Zsh
$ tura zsh "check the startup files"

# Use the system shell_command interface
$ tura shel "inspect this workspace"
```

### Common Run Options

| Option                   | Purpose                              |
| ------------------------ | ------------------------------------ |
| `--session ID`           | Continue a specific session          |
| `-m, --model MODEL`      | Override the model                   |
| `-a, --agent-id ID`      | Select an agent configuration        |
| `-p, --priority`         | Enable priority model routing        |
| `--output FORMAT`        | Use `text`, `json`, or `ndjson`      |
| `--stream`               | Stream gateway events                |
| `--no-stream`            | Poll until the task completes        |
| `--timeout SECONDS`      | Set the task timeout                 |
| `-c, --config KEY=VALUE` | Add a runtime configuration override |

{.show-header}

## Output and Automation {.cols-2}

### Structured Output

```bash
# Stream NDJSON events
$ tura run --output ndjson "fix the failing tests"

# Read a prompt from stdin and emit JSONL events
$ echo "summarize the architecture" | tura exec --json

# Disable streaming and wait for the final result
$ tura run --no-stream --output json "list open tasks"
```

### Sessions

```bash
# List sessions as JSON
$ tura session list --json

# Inspect one session
$ tura session show SESSION_ID --json

# Continue the most recent session
$ tura resume --last "continue and verify the result"

# Abort a running session
$ tura session abort SESSION_ID --json
```

### Agent Profiles

```bash
# List configured agents
$ tura agent list --json

# Show an agent profile
$ tura agent show AGENT_ID --json

# Set an agent's model and reasoning level
$ tura agent model AGENT_ID openai/gpt-5 --reasoning high
```

### Workspace Configuration

```bash
# Read the current configuration
$ tura config get

# Update one or more values
$ tura config set model=openai/gpt-5 planning=on

# View default model tiers
$ tura config model-tiers --json
```

## Shell Completion {.cols-3}

### Bash

```bash
$ tura completion bash > ~/.local/share/bash-completion/completions/tura
```

### Zsh

```bash
$ tura completion zsh > "${fpath[1]}/_tura"
```

### Fish

```bash
$ tura completion fish > ~/.config/fish/completions/tura.fish
```

## Resources

- [Official website](https://turaai.net/)
- [GitHub repository](https://github.com/Tura-AI/tura)
- [Documentation](https://github.com/Tura-AI/tura/tree/main/docs)
- [Releases](https://github.com/Tura-AI/tura/releases)
