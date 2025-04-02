# Storage

This layer serves as the **persistent memory** of your knowledge base. It combines **vector store plugins** for storing embeddings used in semantic queries, and **file storage plugins** for retaining both raw and processed content. By unifying these capabilities, Unbody ensures that everything from AI-augmented data to user uploads remain accessible in a consistent, knowledge-centric manner.

# Built-in Modules

## VectorStore Plugins

Where embeddings reside for semantic lookups and advanced AI-driven retrieval.

### Weaviate

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| Weaviate | Indexes semantic embeddings, enabling fast similarity queries and dynamic knowledge retrieval. | `Alpha` | `Available` |

## FileStorage Plugins

Holds raw files and other artifacts so they can be served or processed by the system.

### Native Storage

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| Mux |  | `Icebox` | `Available` |
| ImgIx |  | `Icebox` | `Available` |
| Unbody’s CDN |  | `N/A` | `Available` |

### Local Storage

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| Local Storage | Retains files on local disks or network drives for straightforward access. | `Alpha` | `N/A` |

### 3rd parties

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| S3 | Persists files in AWS S3 or S3-compatible endpoints, offering scalable cloud hosting. | `Icebox` | `Icebox` |
| Google Storage | Places and retrieves files from Google Cloud Storage buckets. | `Icebox` | `Icebox` |