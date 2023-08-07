# REST APIs - Practical

Welcome to the REST APIs - Practical project! This project showcases a collection of practical REST API endpoints for user management and entertainment, incorporating user signup, login, profile viewing, Chuck Norris jokes retrieval, and user logout functionalities.

## Table of Contents

- [Getting Started](#getting-started)
- [Database Configuration](#database-configuration)
- [Endpoints](#endpoints)
  - [User Signup](#user-signup)
  - [User Login](#user-login)
  - [View Profile](#view-profile)
  - [Random Chuck Norris Joke](#random-chuck-norris-joke)
  - [User Logout](#user-logout)
- [Usage](#usage)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/i-am-anurag/practical-rest-api.git`
2. Install dependencies: `npm install`
3. Configure environment variables (if applicable): Create a `.env` file and set the required variables.
4. Start the server: `npm start`

## Database Configuration

1. Run the following command to initialize Sequelize in your project and generate a configuration file:
   ```sh
   npx sequelize init
   Update the config/config.json file with your database configuration:
   {
    "development": {
        "username": "your-mysql-username",
        "password": "your-mysql-password",
        "database": "your-database-name",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
  // ...
  }


## Endpoints

### User Signup

Endpoint: `POST /api/users/signup`

Description: Create a new user account.

### User Login

Endpoint: `POST /api/users/login`

Description: Authenticate a user and generate an access token.

### View Profile

Endpoint: `GET /api/users/me`

Description: Retrieve the profile of an authenticated user.

### Random Chuck Norris Joke

Endpoint: `GET /api/random-joke`

Description: Fetch a random Chuck Norris joke from the Chuck Norris API and return it.

Chuck Norris API: [https://api.chucknorris.io/jokes/random](https://api.chucknorris.io/jokes/random)

### User Logout

Endpoint: `POST /api/users/logout`

Description: Invalidate the user's access token and log them out.

## Usage

- Ensure you have the necessary software and dependencies installed.
- Start the server using `npm start` or your preferred method.
- Use a tool like Postman or your preferred API client to make requests to the specified endpoints.