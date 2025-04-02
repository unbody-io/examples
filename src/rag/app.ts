import {GetQueryGenerativeResultMetadata, ITextBlock, Unbody} from "unbody";

const unbody = new Unbody({
    apiKey: "apikey",
    projectId: "pid",
    baseUrl: "http://localhost:3000/content"
});

type RAGResult = {
    result: string;
    error?: string;
    from: ITextBlock[];
    metadata: GetQueryGenerativeResultMetadata;
};

const rag = async (query: string): Promise<RAGResult> => {
    const { data: { generate } } = 
        await unbody.get.textBlock
            .select("text", "document.TextDocument.title", "document.TextDocument.originalName")
            .search.about(query, {certainty: 0.5})
            .generate.fromMany(
                `generate a response to the user's input: ${query} - please format the response in raw HTML`,
                ["text"]
            )
            .limit(50)
            .exec();

    return generate as RAGResult;
}


window.onload = async () => {
    const form = document.querySelector("form");
    const status = document.getElementById("status");
    const resultsContainer = document.getElementById("results");

    if (!resultsContainer) {
        throw new Error("Results container not found");
    }

    form?.addEventListener("submit", async (e) => {
        e.preventDefault();
        const query = document.getElementById("query") as HTMLInputElement;
        status!.textContent = "thinking...";
        const results = await rag(query.value);
        status!.textContent = `I found ${results.from.length} relavant text blocks.`
        resultsContainer.innerHTML = results.result;
    });
}