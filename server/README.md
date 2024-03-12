
<h3 align="center">

[📑&nbsp; API Docs](https://documenter.getpostman.com/view/31850881/2sA3Bt193p) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[🗂️&nbsp; Source Code](../server/)

</h3>
<br>

<h1 align="center">Simply Todo Backend</h1>

- This codebase contains the backend logic for the **Simply Todo** application, which manages todos.

- Dive into the codebase to explore the inner workings of Simply Todo's backend.

<br>

## User Authentication &nbsp; 🔐

### - &nbsp;Sign Up

- Endpoint: `/api/auth/signup`

- Method: `POST`

- Description: Register a new user with required information.

### - &nbsp;Sign In

- Endpoint: `/api/auth/signin`

- Method: `POST`

- Description: Authenticate and sign in user with credentials.

<br/>

## Todo Management &nbsp;✅

### - &nbsp;Get All Todos

- Endpoint: `/api/todos`

- Method: `GET`

- Description: Retrieve all todos.

### - &nbsp;Add a New Todo

- Endpoint: `/api/todos`

- Method: `POST`

- Description: Create a new todo.

### - &nbsp;Update Todo

- Endpoint: `/api/todos/:id`

- Method: `PUT`

- Description: Update a specific todo.

### - &nbsp;Delete Todo

- Endpoint: `/api/todos/:id`

- Method: `DELETE`

- Description: Delete a specific todo.

<br><br>

<h2 >🖥️&nbsp;&nbsp; Local Development</h2>

1. **Navigate to the Backend Codebase:**

   ```bash
   cd server/
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Add Environment Variables:**

   Create .env file in the root folder and copy paste the content of .env.sample.

   ```bash
   cp .env.sample .env
   ```

   If required, add necessary credentials.

4. **Start the Server:**

   ```bash
   npm start
   ```

5. **Explore the API:**

   Access the project APIs at the specified endpoints using [API Docs](https://documenter.getpostman.com/view/31850881/2sA3Bt193p).

<br><br>


Feel free to explore backend APIs implementation and run it locally to verify it's correctness. Happy coding!

