# Vectorization

Transforms text, images and videos into numerical embeddings that capture semantic meaning. This enables downstream tasks like semantic search, similarity comparison, and more.

# Built-in Modules

## Text2Vec Plugins

Provide models that convert text into vector embeddings.

### OpenAI

Offers OpenAI-based text embedding models. 

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| ada-002 | Generates text embeddings using OpenAI’s Ada-002 model. | `Alpha` | `Available` |
| embedding-3-large | Large-scale embedding model from OpenAI. | `Alpha` | `Available` |
| embedding-3-small | Smaller variant for embedding text with lower resource usage. | `Alpha` | `Available` |

### Cohere

Provides Cohere-based multilingual or English text embedding models.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| multilingual-v3.0 | Cohere’s multilingual model (version 3.0) for text embeddings. | `Backlog` | `Available` |
| multilingual-light-v3.0 | Lighter variant of the multilingual v3.0 model. | `Backlog` | `Available` |
| english-v3.0 | Cohere’s English model (version 3.0) for text embeddings. | `Backlog` | `Available` |
| english-light-v3.0 | Lightweight variant of the English v3.0 model. | `Backlog` | `Available` |
| english-v2.0 | Cohere’s older English embedding model (version 2.0). | `Backlog` | `Available` |
| english-light-v2.0 | Lightweight variant of the English v2.0 model. | `Backlog` | `Available` |

### Self-hosted

Allows you to run open-source or self-deployed text embedding solutions.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| text2vec-contextionary | A contextionary-based approach for generating embeddings locally. | `Backlog` | `Available` |
| text2vec-transformers | Uses transformer models (e.g., via Hugging Face) for local text embedding. | `Backlog` | `Available` |

## Img2Vec Plugins

Convert images into vector embeddings that capture visual characteristics.

### Self-hosted

Run your own image embedding models without relying on external APIs.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| img2vec-neural | Neural network-based approach for generating image embeddings locally. | `Alpha` | `Available` |

# External Modules

NA

(No external modules are defined for this layer.)