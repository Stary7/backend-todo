
## Project Overview

This app is connected to the backend service hosted at:

- **Backend URL**: `https://backend-todo-suoo.onrender.com`

## API Endpoints

### Authentication

- **Register User**
  - **URL**: `/api/auth/register`
  - **Method**: POST
  - **Request Body**:
    ```json
    {
      "username": "your_username",
      "email": "your_email@example.com",
      "password": "your_password"
    }
    ```
  - **Success Response**:
    - **Code**: 201
    - **Content**: `{ "message": "User registered successfully" }`

- **Login User**
  - **URL**: `/api/auth/login`
  - **Method**: POST
  - **Request Body**:
    ```json
    {
      "email": "your_email@example.com",
      "password": "your_password"
    }
    ```
  - **Success Response**:
    - **Code**: 200
    - **Content**: `{ "token": "your_jwt_token" }`

### Tasks

- **Get Tasks**
  - **URL**: `/api/tasks`
  - **Method**: GET
  - **Headers**:
    - `Authorization: Bearer <your_jwt_token>`
  - **Success Response**:
    - **Code**: 200
    - **Content**: `[ { "id": "task_id", "title": "Task Title", "completed": false } ]`

- **Create Task**
  - **URL**: `/api/tasks`
  - **Method**: POST
  - **Request Body**:
    ```json
    {
      "title": "New Task Title"
    }
    ```
  - **Headers**:
    - `Authorization: Bearer <your_jwt_token>`
  - **Success Response**:
    - **Code**: 201
    - **Content**: `{ "id": "task_id", "title": "New Task Title", "completed": false }`

- **Update Task**
  - **URL**: `/api/tasks/{id}`
  - **Method**: PUT
  - **Request Body**:
    ```json
    {
      "title": "Updated Task Title",
      "completed": true
    }
    ```
  - **Headers**:
    - `Authorization: Bearer <your_jwt_token>`
  - **Success Response**:
    - **Code**: 200
    - **Content**: `{ "id": "task_id", "title": "Updated Task Title", "completed": true }`

- **Delete Task**
  - **URL**: `/api/tasks/{id}`
  - **Method**: DELETE
  - **Headers**:
    - `Authorization: Bearer <your_jwt_token>`
  - **Success Response**:
    - **Code**: 200
    - **Content**: `{ "message": "Task deleted successfully" }`

