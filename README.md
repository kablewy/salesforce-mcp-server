# Salesforce MCP Server

A Model Context Protocol server implementation for interacting with Salesforce through its REST API.

<a href="https://glama.ai/mcp/servers/y9k3w9grtk"><img width="380" height="200" src="https://glama.ai/mcp/servers/y9k3w9grtk/badge" alt="salesforce-mcp-server MCP server" /></a>

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
