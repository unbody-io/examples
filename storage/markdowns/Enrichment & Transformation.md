# Enrichment & Transformation

This is where you define the structure and logic of your knowledge base. It provides enhancers and modules to extract, transform, and generate data from various sources, shaping your content into new formats and producing synthetic insights using AI-driven actions.

# Built-in Modules

## Enhancer Plugins

Tools that apply AI-based transformations to your data, helping you enrich and remodel information for downstream indexing or retrieval.

### Generator Agents

Create new representations or structured outputs from existing content.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| JSON | Converts data into structured JSON output. | `Alpha` | `Available` |
| Summary | Produces concise summaries from text documents. | `Alpha` | `Available` |
| Caption | Generates descriptive captions for images. | `Alpha` | `Available` |
| TEXT |  | `Backlog` | `Available` |

### Extractor Agents

Identify, label, or extract valuable information within the data.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| OCR | Pulls text from images using optical character recognition. | `Alpha` | `Available` |
| Image Tagging | Labels images with tags (objects, scenes, etc.). | `Alpha` | `Available` |
| Name Entity | Detects named entities such as people, places, and organizations. | `Alpha` | `Available` |
| Keyword | Extracts key terms or phrases from content. | `Icebox` | `Available` |
| Topic | Discovers overarching topics or themes within text data. | `Icebox` | `Available` |

### Retrieval Plugins

Augment data with external context or references.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| DB Retrieve | Fetches supplemental data from external or internal databases. | `Icebox` | `Available` |
| Web Crawler | Collects information from specified URLs/websites for broader context. | `Icebox` | `Available` |

### Utilities Plugins

Apply miscellaneous transformations or utility tasks to your data.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| Geo Location config | Adds or infers geolocation metadata from your content. | `Icebox` | `Icebox` |

# External Modules

## Custom Enhancers

Allow you to extend or replace built-in transformations with specialised logic.

### Your custom logic

Subcategory for user-defined AI-driven steps or workflows to meet unique needs.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| Your custom logic | Implements user-defined enhancers for specialized data transformations. | `Alpha` | `Available` |