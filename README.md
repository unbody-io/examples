# Unbody Demo - Parcel.js

Simple demo showcasing Unbody's search and RAG capabilities.

## Features

- **Search**: Semantic, keyword, and hybrid search across markdown docs, images, and text blocks
- **RAG**: Generate summaries and answers from your content

## Quick Start
Make sure your unbdoy server is running and the data is indexed.

```bash
npm install
npm start
```

## Examples

### Search
```typescript
// Semantic search with 0.65 certainty
const results = await unbody.get.textDocument
  .search.about(query)
  .select("title", "autoSummary")
  .limit(3)
  .exec();
```

### RAG
```typescript
// Generate content from your docs
const answer = await unbody.get.textDocument
  .search.about(query)
  .select("text", "title")
  .generate.fromMany(
    "Explain these documents",
    ["text"]
  )
  .exec();
```

## Tech

Parcel.js • TypeScript • Tailwind CSS • [Unbody](https://unbody.io) 