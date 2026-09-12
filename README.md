# MERN Stack Project Starter

Full-stack application with a Vite + React frontend and Node.js + Express + MongoDB backend.

## Project Structure

```
AiProjectTest/
├── backend/
│   ├── controllers/       # Controller functions for business logic
│   │   └── itemController.js
│   ├── models/            # Mongoose schemas
│   │   └── Item.js
│   ├── routes/            # Express route definitions
│   │   ├── healthRoutes.js
│   │   └── itemRoutes.js
│   ├── .env               # Environment configuration (PORT, MONGODB_URI)
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js          # Express application entry point
├── frontend/
│   ├── src/
│   │   ├── services/      # API communication layer
│   │   │   └── api.js
│   │   ├── App.jsx        # Main React dashboard component
│   │   ├── index.css      # Design system & modern styling
│   │   └── main.jsx       # React entry point
│   ├── index.html
│   ├── vite.config.js     # Vite config with backend proxy
│   ├── package.json
│   └── .gitignore
└── README.md
```

## Getting Started

### 1. Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend will start on `http://localhost:5000`.

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend will start on `http://localhost:5173`.

### 3. Database Connection
By default, the backend looks for MongoDB at `mongodb://localhost:27017/mern_starter`. You can update `MONGODB_URI` in `backend/.env` with your MongoDB Atlas or local connection string.
