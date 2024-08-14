# User Management API

This project is a simple User Management API built with Nest.js. It provides endpoints to add users, retrieve users by ID, and authenticate users via login.

## Features

- **Add User**: Sign up a new user with username, email, password, and phone number.
- **Get All Users**: Retrieve a list of all users.
- **Get User by ID**: Retrieve a user by their ID.
- **User Authentication**: Log in a user using their email and password.

## Endpoints

### User Endpoints

- **GET** `/api/v1/users` - Retrieve all users.
- **GET** `/api/v1/users/get-user/:id` - Retrieve a user by their ID.
- **POST** `/api/v1/users/add-user` - Add a new user (sign up).
  - **Request Body (JSON):**
    ```json
    {
      "username": "john_doe",
      "email": "john@example.com",
      "password": "password123",
      "phone": "123-456-7890"
    }
    ```

### Authentication Endpoints

- **POST** `/api/v1/auth/login` - Log in a user.
  - **Request Body (JSON):**
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

## Getting Started

To set up the project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
2. Start Docker client.

3. Run the application using Docker Compose: 
  docker-compose up

4. First you should add a new user and login by it's credentials. It gives you a jwt token wich you can add to 
  all another api calls as a header 'Authorization' with 'Bearer <jwt_token>'.
Important:
The .env file is already added to the project for ease of use, but this is a bad practice. In a real-world scenario, sensitive information like database credentials should be managed securely and not committed to the repository.

Prerequisites
- Docker: Make sure Docker is installed and running on your machine.
- Docker Compose: Ensure Docker Compose is installed.

Project Structure
- src/: Contains the source code for the application.
- docker-compose.yml: Configuration file to set up the application with Docker.
- .env: Environment variables configuration file (not recommended for production).
