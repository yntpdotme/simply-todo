<h1 align="center">Simply Todo</h1>

<p align="center">
	Take care of your mental space with effortless task organization.
</p>
</p>

<p align=center>
  <img width = "700px" alt="Jio Network blocking the view? Network switch reveals the magic!" src="./assets/mern.png">
<p>

<div align= "center">

[![Twitter Badge](https://img.shields.io/badge/-@KadlagAkash-1ca0f1?style=flat&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/KadlagAkash)](https://twitter.com/KadlagAkash) &nbsp; [![Linkedin Badge](https://img.shields.io/badge/-KadlagAkash-0e76a8?style=flat&labelColor=0e76a8&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kadlagakash/) &nbsp; [![Mail Badge](https://img.shields.io/badge/-akashkadlag14-c0392b?style=flat&labelColor=c0392b&logo=gmail&logoColor=white)](mailto:akashkadlag14@gmail.com) &nbsp; [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)&nbsp; [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

</div>

<h2 align="center">

 <img src = "./assets/eyes-to-see.gif" width = 28px align="top"/> &nbsp;[Live Demo](https://simply-todo-client.vercel.app/) &nbsp;»

</h2>

<h3 align="center">

[🗂️&nbsp; Frontend](./client/README.md)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Backend &nbsp;📂](./server/README.md)

</h3>
<br>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> 
	·&nbsp;<a href="#features"><strong>Features</strong></a> 
	·&nbsp;<a href="#tech-stack"><strong>Tech Stack</strong></a>
	·&nbsp;<a href="#local-development"><strong>Development Setup</strong></a> 
</p>
<br>

## <a name="introduction">❄️&nbsp; Introduction</a>

Discover the essence of productivity with Simply Todo, an elegant task organization application. Delve into the codebase to explore more.


<br>
<a href="https://simply-todo-client.vercel.app/">
  <p align=center>
    <img width = "650px" alt="Jio Network blocking the view? Network switch reveals the magic!" src="./assets/simply-todo.png">
  <p>
</a>
<br>

## <a name="features">🔋&nbsp; Features</a>

- **Organized File and Folder Structure**: Maintain a well-organized file and folder structure for easy navigation and management.

- **Intuitive UI**: Well-organized and intuitive user interface design for a smooth user experience.

- **Custom Hook**: Efficient data management with a custom hooks.

- **Schema Validation**: Enforced schema validation on both frontend and backend for enhanced data integrity using zod.

- **Backend Integration**: Seamless backend integration for CRUD operations on todos.

- **Secure Authentication**: Robust user authentication with JWT tokens.

- **Security Measures**: Implemented rate limiting.

- **Documentation**: For clarity & a local development setup guide.
  <br><br>

## <a name="tech-stack">⚙️&nbsp; Tech Stack</a>

- [MongoDB](https://www.mongodb.com/) – NoSQL database

- [Express](https://expressjs.com/) – Web application framework

- [React](https://react.dev/) – library for building UI

- [Node.js](https://nodejs.org/) – JavaScript runtime

- [Mongoose](https://mongoosejs.com/) – MongoDB object modeling

- [RESTful API](https://restfulapi.net/) – API design principles

- [Git](https://git-scm.com/) – versioning

- [Vite](https://vitejs.dev/) – building

<br>

## <a name="local-development"> 🖥️&nbsp;&nbsp; Local Development</a>

0.  **Prerequisites** <br>
    Make sure you have the following installed on your machine:

    - [Git](https://git-scm.com/)
    - [Node.js](https://nodejs.org/en)
    - [npm](https://www.npmjs.com/) (Node Package Manager)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/KadlagAkash/simply-todo.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd simply-todo
    ```

3.  **Setup Backend:**

    - **Navigate to the Backend Codebase:**

      ```bash
      cd server
      ```

    - **Install dependencies:**

      ```bash
      npm install
      ```

    - **Add Environment Variables:**

      Create .env file in the root folder and copy paste the content of .env.sample.

      ```bash
      cp .env.sample .env
      ```

      If required, add necessary credentials.

    - **Start the Server:**

      ```bash
      npm start
      ```

    - **Explore the API:**

      Access the project APIs at the specified endpoints using [API Docs](https://documenter.getpostman.com/view/31850881/2sA3Bt193p).

4.  **Setup Frontend:**

    - **Navigate to the Frontent Codebase:**

      ```bash
      cd client
      ```

    - **Install dependencies:**

      ```bash
      npm install
      ```

    - **Add Environment Variables:**

      Create .env file in the root folder and copy paste the content of .env.sample.

      ```bash
      cp .env.sample .env
      ```

      If required, add necessary credentials.

    - **Start the frontend app:**

      ```bash
      npm run dev
      ```

    - **Start the backend server:**

      ```bash
      cd ../server
      npm start
      ```

    - **Open app in browser:**

      Visit [https://localhost:5173](https://localhost:5173) to access frontent.

<br>

## Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for ways to get started.
</br></br>

## 🪪&nbsp;&nbsp; Licensing Information

- It is licensed under the [MIT License](./LICENSE). Feel free to learn, add upon, and share!
