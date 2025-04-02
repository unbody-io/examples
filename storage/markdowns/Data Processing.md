# Data Processing

Handles file parsing and preparation for downstream workflows. It converts various document formats into structured data so that subsequent layers (enhancement, indexing, etc.) can operate effectively.

# Built-in Modules

## File Support Plugins

Provides parsing capabilities for text documents, images, and more. 

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| Google Docs | Converts Google Docs (`application/vnd.google-apps.document`) into text. | `Alpha`  | `Available` |
| Markdown | Processes `.md` files to extract headings, lists, and other text. | `Alpha`  | `Available` |
| Image | Parses image files (e.g., JPEG, PNG) for metadata or basic image info. | `Alpha`  | `Available` |
| PDF | Extracts text from PDF documents for further analysis. | `backlog` | `Available` |
| HTML | Parses HTML pages, extracting textual content and basic metadata. | `backlog` | `Icebox` |
| Video |  | `Icebox` | `Available` |
| Audio |  | `Icebox` | `Available` |
| Spreadsheet |  | `Icebox` | `Available` |

# External Modules

## Compatibility Plugins

Community or third-party plugins that extend file parsing capabilities beyond the native set.

### Unstructured

Enhances parsing for unstructured file formats using external libraries or tools.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| Unstructured | Provides advanced parsing logic for files that lack a clear structure. | `Icebox` | `N/A` |