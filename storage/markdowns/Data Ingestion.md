# Data Ingestion

Data Ingestion is the first layer in Unbody, responsible for bringing data from various sources—third-party services, local folders, remote websites, and databases—into the unified pipeline. This ensures that all raw input is available for downstream parsing, enhancement, and indexing.

---

# Built-in Modules

## Data Provider Plugins

Data Provider Plugins offer native integrations for common data sources, making it simple to ingest content from popular platforms and storage solutions.

### 3rd Parties

Integrations with popular external cloud services.

**modules**

| **Module Name** | **Module Description** | **Open Source Status** | **Cloud Status** |
| --- | --- | --- | --- |
| Google Drive | Retrieves documents and images from a connected Google Drive account. | `Alpha` | `Available` |
| GitHub | Imports issues/repository data from GitHub for analysis and processing. | `Alpha` | `Available` |
| Discord | Gathers messages/files from a specified Discord channel or server. | `Backlog` | `Available` |
| Google Cal | Retrieves events from Google Calendar for scheduling or knowledge extraction. | `Backlog` | `Available` |
| Notion | Imports pages and databases from Notion for further processing within Unbody. | `Icebox` | `Icebox` |

### Local

Integration with local file systems and network drives.

**modules**

| **Module Name** | **Module Description** | **Open Source Status** | **Cloud Status** |
| --- | --- | --- | --- |
| Local Folder | Ingests files from a designated local directory or network drive. | `Alpha` | `Backlog` |

### Remote

Integration with remote websites or endpoints over HTTP/HTTPS.

**modules**

| **Module Name** | **Module Description** | **Open Source Status** | **Cloud Status** |
| --- | --- | --- | --- |
| Crawlee |  | `Backlog` | `Backlog` |
| Firecrawl |  | `Not Planned` | `Available` |

### Database Connectors

Connectors for relational or NoSQL databases.

**modules**

| **Module Name** | **Module Description** | **Open Source Status** | **Cloud Status** |
| --- | --- | --- | --- |
| MySQL | Pulls table data from a MySQL database into Unbody. | `Icebox` | `Icebox` |
| MongoDB | Retrieves documents from a MongoDB collection for ingestion. | `Icebox` | `Icebox` |
| PostgreSQL | Imports rows or views from a PostgreSQL database. | `Icebox` | `Icebox` |

## Data Ingestion API

Ingestion APIs are used to programmatically push data into Unbody, bypassing the need for a pre-built provider plugin.

### Push API

Provides a REST or GraphQL endpoint for external applications to submit data directly.

**modules**

| **Module Name** | **Module Description** | **Open Source Status** | **Cloud Status** |
| --- | --- | --- | --- |
| Main Ingestion API | Allows external apps to push custom data into Unbody’s pipeline in real time. | `Backlog` | `Available` |

# External Modules

## Compatibility Plugins

Community or third-party plugins that extend Unbody’s ingestion capabilities beyond the native provider plugins.

### LLaMaIndex

**Short description of the subcategory:**

A specialized plugin enabling advanced ingestion workflows via LLaMaIndex tooling.

**modules**

| **Module Name** | **Module Description** | **Open Source Status** | **Cloud Status** |
| --- | --- | --- | --- |
| LLaMaIndex | Integrates LLaMaIndex to facilitate complex data ingestion and transformation. | `Icebox` | `N/A` |