//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const queryEval: EvalFunction = {
    name: "queryEval",
    description: "Evaluates the Salesforce query tool functionality",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please execute a SOQL query to retrieve all Contact records from Salesforce and return their names and IDs.");
        return JSON.parse(result);
    }
};

const toolingQueryEval: EvalFunction = {
    name: "Tooling Query Evaluation",
    description: "Evaluates the functionality of executing a query against the Salesforce Tooling API",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please execute a Tooling API query to list all Apex classes in the org.");
        return JSON.parse(result);
    }
};

const describeObjectEval: EvalFunction = {
    name: 'describe-object Evaluation',
    description: 'Evaluates the detailed metadata retrieval for a Salesforce object',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Describe the Opportunity object in Salesforce with detailed metadata");
        return JSON.parse(result);
    }
};

const metadataRetrieveEval: EvalFunction = {
    name: "metadata-retrieve Evaluation",
    description: "Evaluates the functionality of retrieving metadata components from Salesforce",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please retrieve the Flow named 'MyFlow' from Salesforce using your metadata-retrieve tool.");
        return JSON.parse(result);
    }
};

const queryEval: EvalFunction = {
    name: 'query Tool Evaluation',
    description: 'Evaluates the correctness of executing a SOQL query on Salesforce',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Use the query tool to retrieve the first ten accounts from Salesforce, returning Id and Name fields.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [queryEval, toolingQueryEval, describeObjectEval, metadataRetrieveEval, queryEval]
};
  
export default config;
  
export const evals = [queryEval, toolingQueryEval, describeObjectEval, metadataRetrieveEval, queryEval];