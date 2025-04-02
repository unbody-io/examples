# Utilities

This layer provides supporting tools and infrastructure for optimizing and orchestrating intelligence workflows inside Unbody. While not directly involved in ingestion, processing, or generation, these utility modules enhance functionality like semantic precision (via reranking) and intelligent interpretation (via agents).

# Built-in Modules

## Rerankers

Rerankers reorder the results of vector search to improve semantic relevance and ranking quality using large language models or scoring techniques.

### Open Source

Transformer-based reranking using open LLMs and embeddings.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| transformers | Lightweight reranker using open transformer models | `Alpha` | `Available` |

### Cohere

Proprietary rerankers trained by Cohere for multilingual and domain-specific reranking.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| v3.5 | Latest high-accuracy reranker for general-purpose use | `Alpha` | `Available` |
| english-v3.0 | Reranker trained for English-language corpora | `Alpha` | `Available` |
| multilingual-v3.0 | Reranker supporting multiple languages | `Alpha` | `Available` |

---

## Agents

Agents add automation, reasoning, and logic-processing capabilities into your pipeline by interpreting user intent and orchestrating responses across plugins.

### Query Parsers

Tools that help parse user input into actionable queries, often for function calling or content routing.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| Query Parser | Parses user input for agent workflows or API usage | `Backlog` | `Available` |

---

Let me know when you’re ready for the next one.