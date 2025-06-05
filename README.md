[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/kablewy-salesforce-mcp-server-badge.png)](https://mseep.ai/app/kablewy-salesforce-mcp-server)

# Salesforce MCP Server

[![smithery badge](https://smithery.ai/badge/salesforce-mcp-server)](https://smithery.ai/server/salesforce-mcp-server)

A Model Context Protocol server implementation for interacting with Salesforce through its REST API using jsforce.

### Installing via Smithery

To install Salesforce Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/salesforce-mcp-server):

```bash
npx -y @smithery/cli install salesforce-mcp-server --client claude
```

## Features

- Execute SOQL queries
- Retrieve object metadata
- Create, update, and delete records
- Secure authentication handling
- Real-time data access

## Setup

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your Salesforce credentials
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Start: `npm start`

## Usage

The server exposes several functions:

### query
Execute SOQL queries against your Salesforce instance:
```json
{
  "name": "query",
  "parameters": {
    "query": "SELECT Id, Name FROM Account LIMIT 5"
  }
}
```

### describe-object
Get metadata about a Salesforce object:
```json
{
  "name": "describe-object",
  "parameters": {
    "objectName": "Account"
  }
}
```

### create
Create a new record:
```json
{
  "name": "create",
  "parameters": {
    "objectName": "Contact",
    "data": {
      "FirstName": "John",
      "LastName": "Doe",
      "Email": "john.doe@example.com"
    }
  }
}
```

### update
Update an existing record:
```json
{
  "name": "update",
  "parameters": {
    "objectName": "Contact",
    "data": {
      "Id": "003XXXXXXXXXXXXXXX",
      "Email": "new.email@example.com"
    }
  }
}
```

### delete
Delete a record:
```json
{
  "name": "delete",
  "parameters": {
    "objectName": "Contact",
    "id": "003XXXXXXXXXXXXXXX"
  }
}
```



## Running evals

The evals package loads an mcp client that then runs the index.ts file, so there is no need to rebuild between tests. You can load environment variables by prefixing the npx command. Full documentation can be found [here](https://www.mcpevals.io/docs).

```bash
OPENAI_API_KEY=your-key  npx mcp-eval src/evals/evals.ts src/tools.ts
```
## Security

Make sure to:
- Keep your `.env` file secure and never commit it
- Use IP restrictions in Salesforce when possible
- Regularly rotate your security token
- Consider implementing additional authentication for the MCP server

## Contributing

Contributions are welcome! Please submit PRs with improvements.

# Salesforce MCP Server

A Model Context Protocol server implementation for interacting with Salesforce through its REST API using jsforce.

### Installing via Smithery

To install Salesforce Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/salesforce-mcp-server):

```bash
npx -y @smithery/cli install salesforce-mcp-server --client claude
```

## Features

- Execute SOQL queries
- Retrieve object metadata
- Create, update, and delete records
- Secure authentication handling
- Real-time data access

## Setup

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your Salesforce credentials
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Start: `npm start`

## Usage

The server exposes several functions:

### query
Execute SOQL queries against your Salesforce instance:
```json
{
  "name": "query",
  "parameters": {
    "query": "SELECT Id, Name FROM Account LIMIT 5"
  }
}
```

### describe-object
Get metadata about a Salesforce object:
```json
{
  "name": "describe-object",
  "parameters": {
    "objectName": "Account"
  }
}
```

### create
Create a new record:
```json
{
  "name": "create",
  "parameters": {
    "objectName": "Contact",
    "data": {
      "FirstName": "John",
      "LastName": "Doe",
      "Email": "john.doe@example.com"
    }
  }
}
```

### update
Update an existing record:
```json
{
  "name": "update",
  "parameters": {
    "objectName": "Contact",
    "data": {
      "Id": "003XXXXXXXXXXXXXXX",
      "Email": "new.email@example.com"
    }
  }
}
```

### delete
Delete a record:
```json
{
  "name": "delete",
  "parameters": {
    "objectName": "Contact",
    "id": "003XXXXXXXXXXXXXXX"
  }
}
```

## Security

Make sure to:
- Keep your `.env` file secure and never commit it
- Use IP restrictions in Salesforce when possible
- Regularly rotate your security token
- Consider implementing additional authentication for the MCP server

## Contributing

Contributions are welcome! Please submit PRs with improvements.

## License

MIT License

```
MIT License

Copyright (c) 2024 Kablewy,LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
