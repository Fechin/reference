---
title: Ollama
date: 2026-10-07 12:00:00
background: bg-[#111111]
tags:
  - AI
  - LLM
  - Local
  - CLI
categories:
  - AI
intro: |
  [Ollama](https://ollama.com) lets you get up and running with large language models locally. Run, customize, and build applications with open models like Llama, DeepSeek, Mistral, and Gemma.
plugins:
  - copyCode
---

## Getting Started {.cols-3}

### Installation {.row-span-2}

#### macOS

```bash
$ brew install ollama
```

Or download the installer from [ollama.com/download](https://ollama.com/download).

#### Linux

```bash
$ curl -fsSL https://ollama.com/install.sh | sh
```

#### Windows

```powershell
> winget install Ollama.Ollama
```

Or download the `.exe` installer from [ollama.com/download/windows](https://ollama.com/download/windows).

#### Docker

```bash
$ docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

### First Run

```bash
# Verify installation
$ ollama --version

# Start server manually (if not run as a background service)
$ ollama serve

# Download and run your first model
$ ollama run llama3.2

# Run with a single-shot prompt
$ ollama run llama3.2 "Explain APIs in simple terms"
```

### Key Concepts {.secondary}

| Concept             | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| Model Library       | Pre-packaged models available at [ollama.com/library](https://ollama.com/library) |
| Daemon              | Local background server running on `localhost:11434`                              |
| Modelfile           | Blueprint to configure, customize, and build custom models                        |
| Context (`num_ctx`) | Total token window size allocated in memory                                       |
| VRAM Offload        | Automatically detects Metal / CUDA / ROCm to offload layers                       |
| OpenAI API          | Built-in drop-in replacement API at `/v1`                                         |

{.bold-first}

## CLI Commands {.cols-2}

### Core Commands {.row-span-2}

| Command                            | Description                                         |
| ---------------------------------- | --------------------------------------------------- |
| `ollama serve`                     | Start the Ollama server daemon                      |
| `ollama run <model>`               | Run a model and start an interactive chat session   |
| `ollama run <model> "prompt"`      | Run a model with a single prompt and exit           |
| `ollama pull <model>`              | Download or update a model from the registry        |
| `ollama list` / `ollama ls`        | List all locally downloaded models                  |
| `ollama ps`                        | List models currently loaded in RAM/VRAM            |
| `ollama show <model>`              | Inspect model architecture, parameters, and details |
| `ollama show --modelfile <model>`  | Print the Modelfile used to build the model         |
| `ollama show --parameters <model>` | Print runtime parameter configurations              |
| `ollama show --system <model>`     | Print the model's default system prompt             |
| `ollama stop <model>`              | Unload a running model from memory                  |
| `ollama rm <model>`                | Remove/delete a downloaded model from disk          |
| `ollama cp <source> <target>`      | Copy or alias an existing model                     |
| `ollama create <name> -f <file>`   | Build a custom model from a Modelfile               |
| `ollama push <model>`              | Push a custom model to the Ollama registry          |

{.bold-first}

### Run Command Flags

| Flag                     | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| `--verbose`              | Print generation stats (eval rate in tokens/sec)       |
| `--format json`          | Enforce valid JSON structured output                   |
| `--keepalive <duration>` | How long to keep model loaded (`5m`, `24h`, `0`, `-1`) |
| `--insecure`             | Allow HTTP connections to unverified registries        |
| `--nowordwrap`           | Disable automatic word wrapping in terminal output     |

{.bold-first}

### Quick CLI Examples

```bash
# Pull a specific quantized version
$ ollama pull llama3.2:1b

# Run with token stats and JSON enforcement
$ ollama run llama3.2 --verbose --format json "List 3 colors in JSON"

# Stop a model immediately to free VRAM
$ ollama stop llama3.2

# Unload immediately after generating
$ ollama run llama3.2 --keepalive 0 "Quick answer"
```

## Interactive Chat {.cols-2}

### Session Commands {.row-span-2}

Inside an `ollama run <model>` prompt:

| Command                      | Description                                         |
| ---------------------------- | --------------------------------------------------- |
| `/?` or `/help`              | Show available session commands                     |
| `/set system <text>`         | Set temporary system prompt for this session        |
| `/set parameter <key> <val>` | Override runtime parameter (e.g. `temperature 0.2`) |
| `/set verbose`               | Toggle performance stats output after each response |
| `/set format json`           | Toggle structured JSON output mode                  |
| `/set noformat`              | Revert to standard raw text output mode             |
| `/show info`                 | Display current model information                   |
| `/show system`               | Display active system prompt                        |
| `/show parameters`           | Display current parameter values                    |
| `/show modelfile`            | Display complete active Modelfile                   |
| `/save <name>`               | Save current chat session state as a new model      |
| `/load <name>`               | Load a previously saved model/session               |
| `/clear`                     | Clear chat history and reset context window         |
| `/bye` or `Ctrl+D`           | Exit the interactive session                        |

{.bold-first}

### Chat Tricks & Shortcuts

#### Multiline Input

Type triple quotes `"""` to enter multiline prompt mode:

```text
>>> """
... Write a Python function that reads a CSV file
... and removes any duplicate rows.
... """
```

#### Piped Input (CLI)

Feed file content directly into Ollama from the terminal:

```bash
$ cat error.log | ollama run llama3.2 "Find the root cause of this error"
$ git diff | ollama run qwen2.5-coder "Write a concise commit message"
```

#### Multimodal / Vision

Provide an image path along with your prompt:

```bash
$ ollama run llava "Describe what is inside this image: ./diagram.png"
```

## Popular Models {.cols-2}

### Model Library {.row-span-2}

| Model              | Parameters  | Context | Best For                               |
| ------------------ | ----------- | ------- | -------------------------------------- |
| `llama3.3`         | 70B         | 128k    | Frontier general reasoning & assistant |
| `llama3.2`         | 1B, 3B      | 128k    | Ultra-fast lightweight edge & mobile   |
| `deepseek-r1`      | 1.5B–70B    | 128k    | Deep reasoning & chain-of-thought math |
| `qwen2.5`          | 0.5B–72B    | 128k    | Multilingual & strong general tasks    |
| `qwen2.5-coder`    | 1.5B–32B    | 128k    | Code generation, refactoring & review  |
| `mistral`          | 7B          | 32k     | Fast, efficient general language model |
| `gemma2`           | 2B, 9B, 27B | 8k      | Google open-weights high efficiency    |
| `phi4`             | 14B         | 16k     | Microsoft high-density reasoning model |
| `llava`            | 7B, 13B     | 4k      | Vision & multimodal image analysis     |
| `nomic-embed-text` | 137M        | 8k      | High-accuracy text embeddings          |

{.bold-first}

### Model Tags & Quantization

Models follow the naming format `name:tag`:

```bash
# Default tag is :latest
$ ollama pull deepseek-r1

# Pull a specific parameter size
$ ollama pull deepseek-r1:14b
$ ollama pull qwen2.5-coder:7b

# Pull a specific quantization variant
$ ollama pull llama3.2:3b-instruct-q8_0
$ ollama pull llama3.2:3b-text-q4_K_M
```

## Modelfile & Custom Models {.cols-2}

### Modelfile Instructions {.row-span-2}

| Instruction               | Description                                                |
| ------------------------- | ---------------------------------------------------------- |
| `FROM <model\|path>`      | Base model name or path to a local `.gguf` file (Required) |
| `SYSTEM """<prompt>"""`   | System message defining model personality and behavior     |
| `PARAMETER <key> <value>` | Configure runtime parameters (temperature, num_ctx, etc.)  |
| `TEMPLATE """<tmpl>"""`   | Custom prompt template for prompt formatting               |
| `MESSAGE <role> <msg>`    | Seed conversation history (`user`, `assistant`, `system`)  |
| `ADAPTER <path>`          | Path to a LoRA adapter file (`.bin` or `.gguf`)            |
| `LICENSE """<text>"""`    | Legal licensing information for the model                  |

{.bold-first}

### Modelfile Parameters

| Parameter        | Type   | Default | Description                                          |
| ---------------- | ------ | ------- | ---------------------------------------------------- |
| `temperature`    | float  | `0.8`   | Randomness / creativity (0 = deterministic)          |
| `num_ctx`        | int    | `2048`  | Context window size in tokens                        |
| `num_predict`    | int    | `-1`    | Maximum tokens to generate (-1 = infinite)           |
| `top_k`          | int    | `40`    | Reduces probability of low-ranked tokens             |
| `top_p`          | float  | `0.9`   | Nucleus sampling threshold                           |
| `repeat_penalty` | float  | `1.1`   | Penalty for repetitive tokens                        |
| `seed`           | int    | `0`     | Random seed for reproducible generation              |
| `stop`           | string | `""`    | Stop sequence string (can be defined multiple times) |

{.bold-first}

### Custom Modelfile Example

Create a file named `Modelfile`:

```dockerfile
FROM llama3.2

# Set context window and temperature
PARAMETER num_ctx 8192
PARAMETER temperature 0.2
PARAMETER stop "<|eot_id|>"

# Set system prompt
SYSTEM """
You are a senior staff engineer.
Provide concise, secure, and production-ready code with unit tests.
"""

# Seed few-shot conversation
MESSAGE user "How do you handle errors?"
MESSAGE assistant "Fail fast, log contextually, and return typed results."
```

Build and run your custom model:

```bash
# Build custom model
$ ollama create staff-engineer -f ./Modelfile

# Run custom model
$ ollama run staff-engineer
```

## REST API {.cols-2}

### Endpoints Overview

| Endpoint        | Method   | Description                           |
| --------------- | -------- | ------------------------------------- |
| `/api/generate` | `POST`   | Generate text completion for a prompt |
| `/api/chat`     | `POST`   | Multi-turn chat completion            |
| `/api/embed`    | `POST`   | Generate vector embeddings            |
| `/api/tags`     | `GET`    | List all local models                 |
| `/api/ps`       | `GET`    | List running models in memory         |
| `/api/show`     | `POST`   | Show model information                |
| `/api/pull`     | `POST`   | Download a model                      |
| `/api/push`     | `POST`   | Push a model to registry              |
| `/api/create`   | `POST`   | Build model from Modelfile            |
| `/api/delete`   | `DELETE` | Delete a model                        |

{.bold-first}

### Generate Completion (`/api/generate`)

```bash
$ curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
```

### Multi-Turn Chat (`/api/chat`)

```bash
$ curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {"role": "system", "content": "You are a concise tutor."},
    {"role": "user", "content": "What is Docker?"}
  ],
  "stream": false
}'
```

### Structured JSON Output

```bash
$ curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {"role": "user", "content": "List 3 EU countries and their capitals"}
  ],
  "format": "json",
  "stream": false
}'
```

### Generate Embeddings (`/api/embed`)

```bash
$ curl http://localhost:11434/api/embed -d '{
  "model": "nomic-embed-text",
  "input": [
    "Ollama makes local AI simple",
    "Running models on your own hardware"
  ]
}'
```

## SDKs & Integrations {.cols-2}

### OpenAI Compatibility (`/v1`) {.row-span-2}

Ollama natively supports OpenAI-compatible endpoints at `http://localhost:11434/v1`:

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama"  # Required field, but ignored locally
)

response = client.chat.completions.create(
    model="llama3.2",
    messages=[
        {"role": "system", "content": "You are an assistant."},
        {"role": "user", "content": "Hello Ollama!"}
    ]
)

print(response.choices[0].message.content)
```

Use this base URL with LangChain, LlamaIndex, LiteLLM, Continue, and Cursor!

### Python SDK (`ollama-python`)

Install:

```bash
$ pip install ollama
```

Chat and Streaming:

```python
import ollama

# Simple chat
response = ollama.chat(
    model="llama3.2",
    messages=[{"role": "user", "content": "Explain async/await in Python"}]
)
print(response["message"]["content"])

# Streaming response
stream = ollama.chat(
    model="llama3.2",
    messages=[{"role": "user", "content": "Write a short poem"}],
    stream=True
)
for chunk in stream:
    print(chunk["message"]["content"], end="", flush=True)

# Generate embeddings
embeds = ollama.embed(
    model="nomic-embed-text",
    input="Local AI with Ollama"
)
```

### JavaScript / TypeScript SDK (`ollama-js`)

Install:

```bash
$ npm install ollama
```

Chat and Streaming:

```javascript
import ollama from "ollama";

// Simple chat
const response = await ollama.chat({
  model: "llama3.2",
  messages: [{ role: "user", content: "What is WebAssembly?" }],
});
console.log(response.message.content);

// Streaming response
const stream = await ollama.chat({
  model: "llama3.2",
  messages: [{ role: "user", content: "Count from 1 to 5" }],
  stream: true,
});

for await (const part of stream) {
  process.stdout.write(part.message.content);
}
```

## Server Configuration & Tuning {.cols-2}

### Environment Variables {.row-span-2}

| Variable                   | Default           | Description                                                |
| -------------------------- | ----------------- | ---------------------------------------------------------- |
| `OLLAMA_HOST`              | `127.0.0.1:11434` | Bind IP and port (use `0.0.0.0:11434` for LAN access)      |
| `OLLAMA_MODELS`            | Default path      | Directory where model weights and manifests are stored     |
| `OLLAMA_KEEP_ALIVE`        | `5m`              | How long to keep idle models in VRAM (`-1` = indefinitely) |
| `OLLAMA_NUM_PARALLEL`      | `1`               | Number of parallel requests each model can handle          |
| `OLLAMA_MAX_LOADED_MODELS` | `1`               | Number of distinct models loaded simultaneously in VRAM    |
| `OLLAMA_ORIGINS`           | Localhost         | Allowed CORS origins (e.g. `*` or `http://localhost:3000`) |
| `OLLAMA_FLASH_ATTENTION`   | `0`               | Set `1` to enable FlashAttention (reduces VRAM usage)      |
| `OLLAMA_DEBUG`             | `0`               | Set `1` to output verbose server debug logs                |
| `CUDA_VISIBLE_DEVICES`     | All GPUs          | Specify NVIDIA GPU IDs to expose (e.g. `0,1`)              |

{.bold-first}

### Default Storage Paths

| OS      | Model Cache Location                 |
| ------- | ------------------------------------ |
| macOS   | `~/.ollama/models`                   |
| Linux   | `/usr/share/ollama/.ollama/models`   |
| Windows | `C:\Users\<username>\.ollama\models` |

{.bold-first}

### Setting Server Variables

#### Linux (systemd)

```bash
$ sudo systemctl edit ollama.service
# Add under [Service]:
# Environment="OLLAMA_HOST=0.0.0.0:11434"
# Environment="OLLAMA_KEEP_ALIVE=24h"

$ sudo systemctl daemon-reload
$ sudo systemctl restart ollama
```

#### macOS (launchctl / zsh)

```bash
# In ~/.zshrc or terminal:
export OLLAMA_HOST="0.0.0.0:11434"
export OLLAMA_KEEP_ALIVE="1h"
ollama serve
```

## Docker & GPU Deployment {.cols-2}

### Docker Setup

#### CPU Only

```bash
$ docker run -d \
  -v ollama:/root/.ollama \
  -p 11434:11434 \
  --name ollama \
  ollama/ollama
```

#### NVIDIA GPU Acceleration

```bash
$ docker run -d \
  --gpus=all \
  -v ollama:/root/.ollama \
  -p 11434:11434 \
  --name ollama \
  ollama/ollama
```

#### AMD ROCm GPU Acceleration

```bash
$ docker run -d \
  --device /dev/kfd \
  --device /dev/dri \
  -v ollama:/root/.ollama \
  -p 11434:11434 \
  --name ollama \
  ollama/ollama:rocm
```

### Web UI Companion (Open WebUI)

Run Ollama together with [Open WebUI](https://openwebui.com):

```bash
$ docker run -d \
  -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  --restart always \
  ghcr.io/open-webui/open-webui:main
```

Then visit `http://localhost:3000` in your browser.

## Troubleshooting & Tips {.cols-2}

### Common Issues {.row-span-2}

| Issue                | Cause & Solution                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `connection refused` | Ollama server is not running. Start it with `ollama serve` or check `systemctl status ollama`.                                 |
| Out of Memory (OOM)  | Reduce `num_ctx` in Modelfile, select a smaller model size (e.g. `3b` instead of `70b`), or use lower quantization (`q4_K_M`). |
| GPU Not Being Used   | Verify NVIDIA drivers or Apple Metal support; check server startup logs for GPU detection.                                     |
| Slow Generation      | Check if model was offloaded to CPU RAM instead of VRAM using `ollama ps`.                                                     |
| Port 11434 in use    | Another Ollama instance or process is running: `lsof -i :11434` or `killall ollama`.                                           |

{.bold-first}

### Useful Prompting Patterns

#### Role & Task Prompt

```text
You are a senior DevOps engineer.
Review this GitHub Actions workflow and optimize it for speed and caching:
[workflow yaml]
```

#### Concise Output

```text
Explain Docker network bridges in exactly 4 bullet points.
```

#### Structured Output

```text
Extract all entities from the text below as JSON:
- people (list of strings)
- organizations (list of strings)
- dates (list of strings)
```

## Also See {.cols-2}

### Official Links

- [Ollama Official Website](https://ollama.com) {.link-arrow}
- [Ollama GitHub Repository](https://github.com/ollama/ollama) {.link-arrow}
- [Ollama Model Library](https://ollama.com/library) {.link-arrow}
- [Ollama Python SDK](https://github.com/ollama/ollama-python) {.link-arrow}
- [Ollama JavaScript SDK](https://github.com/ollama/ollama-js) {.link-arrow}
- [Open WebUI](https://openwebui.com) {.link-arrow}

### Related Cheat Sheets

- [Docker Cheat Sheet](/docker.html) {.link-arrow}
- [ChatGPT Cheat Sheet](/chatgpt.html) {.link-arrow}
- [Claude Code Cheat Sheet](/claude-code.html) {.link-arrow}
- [Gemini CLI Cheat Sheet](/gemini-cli.html) {.link-arrow}
- [Python Cheat Sheet](/python.html) {.link-arrow}
- [Bash Cheat Sheet](/bash.html) {.link-arrow}
