# API & SDKs

This layer provides programmatic access to your knowledge base and pipeline configurations. It includes read-only APIs for querying enriched content, admin APIs for managing sources and pipelines, and push APIs for submitting new data. SDKs make it easy to integrate Unbody into apps and developer workflows with typed, language-specific interfaces.

# Built-in Modules

## Content API

Enables read-only access to AI-enriched data through structured queries.

### APIs

Provides query endpoints for retrieving semantic data from the knowledge base.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| GraphQL | Performs semantic, read-only queries over processed content. | `Alpha` | `Available` |

### SDKs

Language-specific clients for integrating the Content API.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| TypeScript | Type-safe SDK to query enriched content via GraphQL. | `Alpha` | `Available` |
| Swift (iOS) | iOS SDK for retrieving AI-powered content. | `Icebox` | `Icebox` |
| Kotlin (Android) | Android SDK to query semantic data from the knowledge base. | `Icebox` | `Icebox` |

---

## Admin API

Offers configuration access to system settings, data sources, and pipelines.

### APIs

Exposes endpoints to programmatically manage Unbody’s operational behavior.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| REST | Allows remote setup and updates for pipelines, sources, and system state. | `Alpha` | `Available` |

### SDKs

Developer interfaces for managing configurations and settings in code.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| TypeScript | Offers typed functions to configure pipelines and sources. | `Alpha` | `Available` |

---

## Push API

Used to inject new data into Unbody from external systems.

### APIs

Accepts incoming data for ingestion and transformation.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| REST | Receives documents and payloads for ingestion. | `Backlog` | `Available` |

### SDKs

Code-first methods for sending new data into Unbody.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| TypeScript | Type-safe SDK for pushing data into Unbody from external sources. | `Backlog` | `Available` |

---

No external modules for this layer.