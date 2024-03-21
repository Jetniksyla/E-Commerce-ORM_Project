# E-Commerce Back End

This project is an e-commerce back end application built using Express.js and Sequelize ORM to interact with a MySQL database. The application provides API endpoints for managing categories, products, and tags, allowing users to perform CRUD (Create, Read, Update, Delete) operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Starting the Server](#starting-the-server)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [Apache License 2.0](LICENSE)
- [Contact](#contact)
## Installation

To install the necessary dependencies, run the following command:

```bash
npm install

```

## Usage

Before running the application, make sure to set up the following environment variables:

- `DB_NAME`: Name of the MySQL database.
- `DB_USER`: MySQL username.
- `DB_PASSWORD`: MySQL password.

You can set these environment variables by creating a `.env` file in the root directory of the project and adding them in the following format:

```plaintext
DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
```

### Environment Variables

These are the routes available in the application:

- `/categories`: This route is used to perform CRUD operations on categories. Users can create, read, update, and delete categories by sending appropriate requests to this endpoint.

- `/products`: Use this route to manage products in the database. Similar to categories, users can perform CRUD operations on products through this endpoint.

- `/tags`: This route allows users to manage tags associated with products. Tags provide additional information about products and can be added, removed, or modified using this endpoint.

To interact with these routes, you can use tools like Insomnia or any API testing tool. Send GET requests to retrieve data, POST requests to create new entries, PUT requests to update existing entries, and DELETE requests to remove entries from the database.

Example usage:
GET /categories - Retrieve all categories
POST /categories - Create a new category
PUT /categories/:id - Update an existing category
DELETE /categories/:id - Delete a category with a specific ID

Similarly, you can replace 'categories' with 'products' or 'tags' in the above examples to interact with the respective endpoints.

### Database Setup

Run the following MySQL shell commands to create the database and seed it with test data:

```bash
source db/schema.sql
npm run seed

```
### Starting the Server

To start the server, run the following command:

```bash
npm start
```

## Walkthrough Video

Please refer to the following walkthrough video that demonstrates the functionality of the application and showcases all of the acceptance criteria being met:

[Link to Walkthrough Video](https://www.loom.com/share/c93100ee000146cf831863f7cf900dac?sid=135988bc-f097-4bfe-a428-8d139496badd)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to submit a pull request.

## License

[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

## Contact

For inquiries or collaboration opportunities, please feel free to reach out to **Jetnik Syla:**

- **Email:** [sjetnik@gmail.com](mailto:sjetnik@gmail.com)
- **GitHub Profile:** [Jetnik Syla](https://github.com/JetnikSyla)
