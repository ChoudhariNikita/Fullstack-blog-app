# 📝 Simple Blog App

A simple full-stack blog application built using **React** (JavaScript) for the frontend and a **backend** (Node.js, Express, or any other technology you're using). The app allows users to view, create, edit, and delete blog posts.

## ✨ Features

- **Frontend**:
  - 📄 View a list of blog posts.
  - ➕ Create new blog posts.
  - ✏️ Edit existing blog posts.
  - 🗑️ Delete blog posts.
  - Built using **React** and **Vite** for fast development.

- **Backend**:
  - Provides a RESTful API for interacting with blog posts (CRUD operations).
  - Built using **Node.js** and **Express** (or any other backend stack you're using).

## 🛠️ Prerequisites

- **Node.js** (>= 14.0)
- **npm** or **yarn** (package managers)

## ⚡ Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app
```

### 2. Install Dependencies

#### For Backend

Navigate to the `backend` directory and install dependencies:

```bash
cd backend
npm install
```

#### For Frontend

Navigate to the `frontend` directory and install dependencies:

```bash
cd frontend
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in both the **frontend** and **backend** directories. These files can store environment-specific variables like API URLs, database credentials, etc.

#### Example `.env` for **frontend**:
```bash
VITE_API_URL=http://localhost:5000
```

#### Example `.env` for **backend**:
```bash
DB_URL=mongodb://localhost:27017/blog
PORT=5000
```

### 4. Run the Development Servers

#### Backend:
Start the backend server:

```bash
cd backend
npm run dev
```

#### Frontend:
Start the frontend development server:

```bash
cd frontend
npm run dev
```

Your frontend will be available at `http://localhost:3000` and the backend API at `http://localhost:5000`.

## 🚀 Usage

1. **Frontend**: Navigate to the frontend URL (`http://localhost:3000`) to interact with the blog. You can create, view, edit, and delete posts.
2. **Backend**: The backend API serves the data for the frontend. You can also interact with the API directly using tools like Postman to test the routes.

## 🌍 Deployment

To deploy your app, you can use cloud platforms such as **Heroku**, **Vercel**, or **Netlify** for both the frontend and backend.

For example:

- **Frontend (Vite + React)**: Deploy on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
- **Backend (Node.js/Express)**: Deploy on [Heroku](https://www.heroku.com/) or [DigitalOcean](https://www.digitalocean.com/).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
