 # To-Do✅ List App with CRUD

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Angular CLI](https://cli.angular.io/) installed (`npm install -g @angular/cli`)
- [.NET Core SDK](https://dotnet.microsoft.com/download) installed
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) installed

## Getting Started

### Frontend (Angular)

1. Open a terminal and navigate to the `ToDoWeb` folder.
2. Run `npm install` to install the necessary dependencies.
3. Run `ng serve` to start the Angular development server.
4. Open your browser and navigate to [http://localhost:4200/](http://localhost:4200/).

### Backend (C# with .NET Core)

1. Open a terminal and navigate to the `ToDoApi` folder.
2. Run `dotnet restore` to restore the necessary packages.
3. Update the database connection string in `appsettings.json`.
4. Run `dotnet ef database update` to apply migrations and create the database.
5. Run `dotnet run` to start the API server.

## Database Setup

- The application uses MSSQL as the database. Ensure that your SQL Server instance is running.
- Run the script `ToDoDBInit.sql` located in the `ToDoDB` folder to initialize the database structure.
- Run the script `ToDoDBTestData.sql` located in the `ToDoDB` folder to insert test data into the database.


## Contributing

Feel free to contribute to this project. Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
