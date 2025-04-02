# Generative Modules

This layer brings generation capabilities into your knowledge base. Whether you're building a chatbot, summarizer, or agent-driven workflow, Unbody's generative modules allow you to plug in large language models (LLMs) directly into your backend pipeline. These modules support use cases like text generation, structured JSON output, and (soon) image generation—enabling intelligent responses and content creation directly from your data.

---

# Built-in Modules

## Generative Text

Allows generation of freeform or conversational text from models based on prompt and context.

### OpenAI

OpenAI language models available for general-purpose and instruction-following generation.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| gpt-4o-mini | Fast, optimized variant of GPT-4o for lightweight use cases | `Alpha` | `Available` |
| gpt-4o | Multi-modal, high-performance model for advanced generation | `Alpha` | `Available` |
| o1-mini | Smaller model for efficient, cost-effective tasks | `Alpha` | `Available` |
| o1 | General-purpose instruction-following model | `Alpha` | `Available` |
| o3-mini | Compact model optimized for simple generation | `Alpha` | `Available` |
| gpt-4-turbo | High-efficiency version of GPT-4 with strong reasoning skills | `Alpha` | `Available` |
| gpt-4 | Full-scale model offering advanced reasoning and language generation | `Alpha` | `Available` |

### Cohere

Support for full range of Cohere models.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| all available models | Placeholder for full Cohere model catalog | `Icebox` | `Available` |

### Mistral

Support for Mistral’s instruction-tuned models.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| all available models | Placeholder for full Mistral model set | `Icebox` | `Available` |

### Google AI

Future support for Gemini and other Google LLMs.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| N/A | Not yet available | `Icebox` | `Icebox` |

### xAI

Models from xAI, including Grok.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| N/A | Not yet available | `Icebox` | `Icebox` |

### Meta

LLaMA and other Meta models.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| N/A | Not yet available | `Icebox` | `Icebox` |

### Local Models

Support for self-hosted open-weight models.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| N/A | Not yet available | `Icebox` | `Icebox` |

---

## Generative JSON

Allows generation of structured, schema-aligned JSON responses from language models.

### OpenAI

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| gpt-4o-mini | Lightweight JSON generator with schema adherence | `Alpha` | `Available` |
| gpt-4o | Powerful model for generating JSON from complex prompts | `Alpha` | `Available` |

### Cohere

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| N/A | Not yet available | `Backlog` | `Available` |

### Local Models

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| N/A | Not yet available | `Backlog` | `N/A` |

---

## Generative Image

Image generation from prompts or source context (planned).

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| N/A | Not yet available | `Icebox` | `Icebox` |