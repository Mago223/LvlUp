# PostgreSQL Database Setup

This README provides instructions on how to set up and run SQL queries to create tables in PostgreSQL using Visual Studio Code.

## Prerequisites

1. PostgreSQL installed on your system
2. Visual Studio Code (VS Code) installed
3. VS Code PostgreSQL extension installed by Chris Kolkman

## Setup Steps

### 1. Install PostgreSQL

Ensure PostgreSQL is installed on your system. You can download it from the [official PostgreSQL website](https://www.postgresql.org/download/).

### 2. Create SQL Files

Create two SQL files in database/ (should be already there):

-   `create_tables.sql`: For creating the database tables
-   `insert_data.sql`: For inserting initial data (optional)

### 3. Install VS Code PostgreSQL Extension

1. Open VS Code
2. Go to the Extensions view by clicking on the square icon in the left sidebar or pressing `Ctrl+Shift+X`
3. Search for "PostgreSQL"
4. Install the extension by Microsoft

### 4. Set Up Database Connection in VS Code

1. In VS Code, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the command palette
2. Type "PostgreSQL" and select "Add Connection"
3. Follow the prompts to enter your database details:
    - Host name (e.g., localhost)
    - Database name (database should be created already by you)
    - Port (default is usually 5432)
    - Username
    - Password

## Running SQL Queries

### To Create Tables:

1. Open your `create_tables.sql` file in VS Code
2. Ensure your database connection is selected in the PostgreSQL extension sidebar
3. Right-click in the SQL file and select "Run Query" or use the shortcut `Ctrl+Shift+E`
4. Highlight the Queries in the file, right click and click run query

### To Insert Initial Data:

1. Open your `insert_data.sql` file in VS Code
2. Follow the same steps as above to run the query

## Troubleshooting

-   [Setting up the extenstion](https://ryanhutzley.medium.com/getting-started-with-the-postgresql-extension-for-vscode-d666c281ec72)

## Additional Resources

-   [PostgreSQL Documentation](https://www.postgresql.org/docs/)
-   [VS Code PostgreSQL Extension Documentation](https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-postgresql)
