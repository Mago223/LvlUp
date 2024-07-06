# PostgreSQL Database VSCODE Integration Setup

This README provides instructions on how to set up and run SQL queries to create tables and insert a user in PostgreSQL using Visual Studio Code.

## Prerequisites

1. PostgreSQL installed on your system
2. Visual Studio Code (VS Code) installed
3. VS Code PostgreSQL extension installed by Chris Kolkman

## Setup Steps

### 1. Install PostgreSQL

Ensure PostgreSQL is installed on your system. You can download it from the [official PostgreSQL website](https://www.postgresql.org/download/).

### 3. Install VS Code PostgreSQL Extension

1. Open VS Code
2. Go to the Extensions view by clicking on the square icon in the left sidebar or pressing `Ctrl+Shift+X`
3. Search for "PostgreSQL" The first one by Chris... is the one, not the Microsoft provided one
4. Install the extension

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

If you need to run an sql query to alter your database:

1. the extenstion should be on the vscoode sidebar (postgre symbol)
2. you will see a tab named 'localhost', expand that
3. you will see your database, right click and select 'Run Query'
4. this will open up a new file in which you can paste or type in a new query
5. after the query is present, highlight it, right click and select 'Run Query'

If you already have a psql file to run, follow step 5.

# Resourses:

[Getting Started with the PostgreSQL Extension for VSCode](https://ryanhutzley.medium.com/getting-started-with-the-postgresql-extension-for-vscode-d666c281ec72)

[Node.js Authentication with PostgreSQL, Sequelize, and Express.js](https://medium.com/@rachealkuranchie/node-js-authentication-with-postgresql-sequelize-and-express-js-20ae773da4c9)
