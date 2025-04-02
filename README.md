# Unbody Demo - Parcel.js

A minimal demo showcasing Unbody's semantic search capabilities using Parcel.js and TypeScript.

## Features

- Semantic search across multiple content types:
  - Markdown documents
  - Images with captions
  - Text blocks
- Three search modes:
  - Semantic search (meaning-based)
  - Keyword search (exact matches)
  - Hybrid search (combination of both)
- Minimal, clean UI
- TypeScript support

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure Unbody:
   - Create an account at [Unbody.io](https://unbody.io)
   - Create a new project
   - Get your API key and project ID
   - Update `src/search/app.ts` with your credentials:
```typescript
const unbody = new Unbody({
    apiKey: "your-api-key",
    projectId: "your-project-id",
    baseUrl: "http://localhost:3000/content" // or your Unbody instance URL
});
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── index.html          # Main entry point
├── search/            # Search feature
│   ├── index.html     # Search page
│   └── app.ts         # Search logic
└── rag/              # RAG feature
    ├── index.html     # RAG page
    └── app.ts         # RAG logic
```

## Search Types

1. **Semantic Search**: Finds content based on meaning rather than exact matches
2. **Keyword Search**: Traditional exact text matching
3. **Hybrid Search**: Combines both semantic and keyword approaches

## Technologies Used

- [Parcel](https://parceljs.org/) - Zero-config bundler
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Unbody](https://unbody.io) - Semantic search and content management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

## License

MIT 