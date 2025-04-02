import {IImageBlock, ITextBlock, ITextDocument, Unbody} from "unbody";

const unbody = new Unbody({
    apiKey: "<your-api-key>", // only needed for the cloud api
    projectId: "<your-project-id>", // only needed for the cloud api
    baseUrl: "http://localhost:3000/content"
});

type SearchResult = {
    markdowns: ITextDocument[];
    images: IImageBlock[];
    textBlocks: ITextBlock[];
}

const semanticSearch = async (query: string): Promise<SearchResult> => {

    console.log("semantic search: ", query);
    const { data: { payload: markdowns } } = 
        await unbody.get.textDocument
            .where({
                mimeType: "text/markdown"
            })
            .select("title", "originalName", "autoSummary")
            .search.about(query, {certainty: 0.6})
            .limit(3)
            .exec();


    const { data: { payload: images } } = 
        await unbody.get.imageBlock
            .where(({IsNull}) => ({
                remoteId: IsNull(false)
            }))   
            .select("url", "originalName", "autoCaption")
            .search.about(query, {certainty: 0.65})
            .limit(3)
            .exec();

    
    const { data: { payload: textBlocks } } = 
        await unbody.get.textBlock
            .select("text", "document.TextDocument.title", "document.TextDocument.originalName")
            .search.about(query, {certainty: 0.65})
            .limit(6)
            .exec();

    return {
        markdowns: markdowns as ITextDocument[],
        images: images as IImageBlock[],
        textBlocks: textBlocks as ITextBlock[]
    }
}

const keywordSearch = async (query: string) => {

    const { data: { payload: markdowns } } = 
        await unbody.get.textDocument
            .where({
                mimeType: "text/markdown"
            })
            .select("title", "originalName", "autoSummary")
            .search.find(query)
            .limit(3)
            .exec();

    const { data: { payload: images } } = 
        await unbody.get.imageBlock
            .where(({IsNull}) => ({
                remoteId: IsNull(false)
            }))
            .select("url", "originalName", "autoCaption")
            .search.find(query)
            .limit(3)
            .exec();

    const { data: { payload: textBlocks } } = 
        await unbody.get.textBlock
            .select("text", "document.TextDocument.title", "document.TextDocument.originalName")
            .search.find(query)
            .limit(6)
            .exec();

    return {
        markdowns: markdowns as ITextDocument[],
        images: images as IImageBlock[],
        textBlocks: textBlocks as ITextBlock[]
    }
}

const hybridSearch = async (query: string): Promise<SearchResult> => {
    const { data: { payload: markdowns } } = 
        await unbody.get.textDocument
            .where({
                mimeType: "text/markdown"
            })
            .select("title", "originalName", "autoSummary")
            .search.hybrid(query) 
            .limit(3)
            .exec();

    const { data: { payload: images } } = 
        await unbody.get.imageBlock
            .where(({IsNull}) => ({
                remoteId: IsNull(false)
            }))
            .select("url", "originalName", "autoCaption")
            .search.hybrid(query) 
            .limit(3)
            .exec();

    const { data: { payload: textBlocks } } = 
        await unbody.get.textBlock
            .select("text", "document.TextDocument.title", "document.TextDocument.originalName")
            .search.hybrid(query)
            .limit(6)
            .exec();

    return {
        markdowns: markdowns as ITextDocument[],
        images: images as IImageBlock[],
        textBlocks: textBlocks as ITextBlock[]
    }
}


window.onload = async () => {
    const form = document.querySelector("form");
    const status = document.getElementById("status");
    const resultsContainer = document.getElementById("results");

    if (!resultsContainer) {
        throw new Error("Results container not found");
    }

    const renderResults = (results: SearchResult) => {
        resultsContainer.innerHTML = '';
        // Render markdown results
        if (results.markdowns?.length) {
            const markdownSection = document.createElement('div');
            markdownSection.className = 'mb-8';
            markdownSection.innerHTML = `
                <h2 class="text-sm mb-4 text-gray-600">Markdown Documents</h2>
                <div class="flex flex-wrap gap-4">
                    ${results.markdowns.map((md: ITextDocument) => `
                        <div class="flex-1 min-w-[300px] border p-4 rounded">
                            <h3 class="font-bold truncate">${md.title}</h3>
                            <p class="text-gray-600 line-clamp-3">${md.autoSummary}</p>
                        </div>
                    `).join('')}
                </div>
            `;
            resultsContainer.appendChild(markdownSection);
        }

        // Render image results
        if (results.images?.length) {
            const imageSection = document.createElement('div');
            imageSection.className = 'mb-8';
            imageSection.innerHTML = `
                <h2 class="text-sm mb-4 text-gray-600">Images</h2>
                <div class="flex flex-wrap gap-4">
                    ${results.images.map((img: IImageBlock) => `
                        <div class="flex-1 min-w-[200px] border p-2 rounded">
                            <img src="${img.url}" class="w-full h-48 object-cover mb-2">
                            <p class="text-sm text-gray-600 line-clamp-2">${img.autoCaption}</p>
                        </div>
                    `).join('')}
                </div>
            `;
            resultsContainer.appendChild(imageSection);
        }

        // Render text block results
        if (results.textBlocks?.length) {
            const textSection = document.createElement('div');
            textSection.className = 'mb-8';
            textSection.innerHTML = `
                <h2 class="text-sm mb-4 text-gray-600">Text Blocks</h2>
                <div class="flex flex-wrap gap-4">
                    ${results.textBlocks.map((block: ITextBlock) => `
                        <div class="flex-1 min-w-[300px] border p-4 rounded">
                            <span class="border border-gray-300 p-1 rounded text-xs">${block.document?.[0]?.originalName}</span>
                            <p class="line-clamp-3">${block.text}</p>
                        </div>
                    `).join('')}
                </div>
            `;
            resultsContainer.appendChild(textSection);
        }
    }

    form?.addEventListener("submit", async (e) => {
        e.preventDefault();
        const query = document.getElementById("query") as HTMLInputElement;
        const searchType = document.getElementById("search-type") as HTMLSelectElement;

        switch (searchType.value) {
            case "semantic":
                status!.textContent = "loading...";
                const semanticResults = await semanticSearch(query.value);
                renderResults(semanticResults);
                status!.textContent = `${semanticResults.markdowns.length} markdown documents, ${semanticResults.images.length} images, ${semanticResults.textBlocks.length} text blocks`;
                break;
            case "keyword":
                status!.textContent = "loading...";
                const keywordResults = await keywordSearch(query.value);
                renderResults(keywordResults);
                status!.textContent = `${keywordResults.markdowns.length} markdown documents, ${keywordResults.images.length} images, ${keywordResults.textBlocks.length} text blocks`;
                break;
            case "hybrid":
                status!.textContent = "loading...";
                const hybridResults = await hybridSearch(query.value);
                renderResults(hybridResults);
                status!.textContent = `${hybridResults.markdowns.length} markdown documents, ${hybridResults.images.length} images, ${hybridResults.textBlocks.length} text blocks`;
                break;
        }
    });
}