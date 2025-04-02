# Function Calling

This layer enables Unbody to transform understanding into action. It allows functions—whether native, remote, or utility-based—to be registered, described, and executed by AI agents or user-driven automation. These functions can range from API calls to business logic utilities, and are designed to be triggered intelligently through AI-native workflows.

---

# Built-in Modules

## Function Registry

Exposes callable functions to the system through schema-based definitions, allowing agents and APIs to invoke internal or external operations.

### Native Functions

Directly implemented functions that live inside your codebase or Unbody environment.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| generateSlug | Generates a URL-safe slug from a string input. | `Icebox` | `Icebox` |
| createNote | Creates a new note or content entry in the knowledge base. | `Icebox` | `Icebox` |
| updateMetadata | Updates metadata fields on existing knowledge items. | `Icebox` | `Icebox` |

### API Proxy Functions

Functions that wrap external APIs to make them callable by agents.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| getWeather | Calls an external weather API to retrieve conditions for a given location. | `Icebox` | `Icebox` |
| getStockPrice | Retrieves real-time stock prices from financial data providers. | `Icebox` | `Icebox` |
| getExchangeRate | Fetches currency exchange rate data from remote API. | `Icebox` | `Icebox` |
| getNews | Gets top news articles from a public or paid news service. | `Icebox` | `Icebox` |

### Native Functions

Small functional helpers for common tasks used across pipelines and workflows.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| getCurrentDate | Returns the current timestamp in ISO format. | `Icebox` | `Icebox` |
| uuid | Generates a unique identifier. | `Icebox` | `Icebox` |
| parseQuery | Parses natural language queries into structured objects. | `Icebox` | `Icebox` |

## Execution & Routing

Handles intent resolution, argument validation, and dynamic execution of callable functions.

### Function Router

Routes query-based calls to the correct registered function based on name, schema, or AI model interpretation.

**modules**

| Module Name | Module Description | Open Source Status | Cloud Status |
| --- | --- | --- | --- |
| smartDispatcher | Determines and dispatches function calls based on context or model output. | `Icebox` | `Icebox` |
| validationLayer | Validates parameters against registered schema before execution. | `Icebox` | `Icebox` |

---

No external modules for this layer.